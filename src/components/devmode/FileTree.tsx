'use client';

import { useState, useEffect } from 'react';
import { FileCode, FileJson, Folder, FolderOpen, ChevronRight, ChevronDown, FileText } from 'lucide-react';

interface TreeNode {
  name: string;
  path: string;
  isFolder: boolean;
  children: TreeNode[];
}

function getFileIconColor(filename: string, isActive: boolean): string {
  if (isActive) return 'text-[var(--primary)]';
  if (filename.endsWith('.tsx') || filename.endsWith('.ts')) return 'text-blue-400';
  if (filename.endsWith('.json')) return 'text-yellow-400';
  if (filename.endsWith('.css')) return 'text-pink-400';
  return 'text-[var(--muted-foreground)]';
}

function buildFileTree(files: string[]): TreeNode[] {
  const root: TreeNode[] = [];

  for (const filePath of files) {
    const cleanPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
    const parts = cleanPath.split('/');
    let currentLevel = root;
    let currentPath = '';

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isLastPart = i === parts.length - 1;
      currentPath = currentPath ? `${currentPath}/${part}` : part;

      let existingNode = currentLevel.find((node) => node.name === part);

      if (!existingNode) {
        existingNode = {
          name: part,
          path: '/' + currentPath,
          isFolder: !isLastPart,
          children: [],
        };
        currentLevel.push(existingNode);
      }

      if (!isLastPart) {
        currentLevel = existingNode.children;
      }
    }
  }

  // 排序：文件夹在前
  const sortNodes = (nodes: TreeNode[]): TreeNode[] => {
    return nodes
      .sort((a, b) => {
        if (a.isFolder && !b.isFolder) return -1;
        if (!a.isFolder && b.isFolder) return 1;
        return a.name.localeCompare(b.name);
      })
      .map((node) => ({
        ...node,
        children: sortNodes(node.children),
      }));
  };

  return sortNodes(root);
}

function TreeNodeItem({
  node,
  depth,
  activeFile,
  onSelect,
  expandedFolders,
  toggleFolder,
}: {
  node: TreeNode;
  depth: number;
  activeFile: string;
  onSelect: (file: string) => void;
  expandedFolders: Set<string>;
  toggleFolder: (path: string) => void;
}) {
  const isActive = node.path === activeFile;
  const isExpanded = expandedFolders.has(node.path);
  const paddingLeft = 12 + depth * 12;

  if (node.isFolder) {
    return (
      <div>
        <button
          onClick={() => toggleFolder(node.path)}
          className="w-full flex items-center gap-1.5 py-1.5 text-[length:var(--text-xs)] text-left transition-colors hover:bg-[var(--surface-2)]"
          style={{ paddingLeft }}
        >
          {isExpanded ? (
            <ChevronDown className="w-3 h-3 text-[var(--muted-foreground)] shrink-0" />
          ) : (
            <ChevronRight className="w-3 h-3 text-[var(--muted-foreground)] shrink-0" />
          )}
          {isExpanded ? (
            <FolderOpen className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
          ) : (
            <Folder className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
          )}
          <span className="truncate text-[var(--foreground)]">{node.name}</span>
        </button>
        {isExpanded && (
          <div>
            {node.children.map((child) => (
              <TreeNodeItem
                key={child.path}
                node={child}
                depth={depth + 1}
                activeFile={activeFile}
                onSelect={onSelect}
                expandedFolders={expandedFolders}
                toggleFolder={toggleFolder}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  const iconColor = getFileIconColor(node.name, isActive);
  const isJson = node.name.endsWith('.json');
  const isCss = node.name.endsWith('.css');

  return (
    <button
      onClick={() => onSelect(node.path)}
      className={`
        w-full flex items-center gap-1.5 py-1.5 text-[length:var(--text-xs)] text-left transition-colors
        ${isActive
          ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-l-2 border-[var(--primary)]'
          : 'hover:bg-[var(--surface-2)] text-[var(--foreground)] border-l-2 border-transparent'
        }
      `}
      style={{ paddingLeft: paddingLeft + 16 }}
    >
      {isJson ? (
        <FileJson className={`w-3.5 h-3.5 ${iconColor} shrink-0`} />
      ) : isCss ? (
        <FileText className={`w-3.5 h-3.5 ${iconColor} shrink-0`} />
      ) : (
        <FileCode className={`w-3.5 h-3.5 ${iconColor} shrink-0`} />
      )}
      <span className="truncate">{node.name}</span>
    </button>
  );
}

interface FileTreeProps {
  files: string[];
  activeFile: string;
  onSelect: (file: string) => void;
}

export function FileTree({ files, activeFile, onSelect }: FileTreeProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());

  // 当文件列表变化时，自动展开所有文件夹
  useEffect(() => {
    const folders = new Set<string>();
    for (const filePath of files) {
      const cleanPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
      const parts = cleanPath.split('/');
      let currentPath = '';
      for (let i = 0; i < parts.length - 1; i++) {
        currentPath = currentPath ? `${currentPath}/${parts[i]}` : parts[i];
        folders.add('/' + currentPath);
      }
    }
    setExpandedFolders(folders);
  }, [files]);

  const toggleFolder = (path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  const tree = buildFileTree(files);

  return (
    <div className="w-48 border-r border-[var(--border)] flex flex-col shrink-0 bg-[var(--surface-1)]">
      <div className="px-3 py-2.5 text-[10px] font-bold text-[var(--muted-foreground)] uppercase tracking-widest border-b border-[var(--border)]">
        Files
      </div>
      <div className="flex-1 overflow-y-auto py-1">
        {tree.map((node) => (
          <TreeNodeItem
            key={node.path}
            node={node}
            depth={0}
            activeFile={activeFile}
            onSelect={onSelect}
            expandedFolders={expandedFolders}
            toggleFolder={toggleFolder}
          />
        ))}
      </div>
    </div>
  );
}
