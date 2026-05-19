'use client';

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteViewRaw } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useEffect, useState } from "react";

interface GoalEditorProps {
  initialContent?: PartialBlock[];
  onChange: (content: any) => void;
}

export default function GoalEditor({ initialContent, onChange }: GoalEditorProps) {
  const [editor, setEditor] = useState<BlockNoteEditor | null>(null);

  useEffect(() => {
    const newEditor = BlockNoteEditor.create({
      initialContent: initialContent || [
        { type: "paragraph", content: "Start writing your goal description here..." }
      ],
    });
    setEditor(newEditor);
  }, []);

  if (!editor) return <div className="p-8 text-gray-500">Loading advanced editor...</div>;

  return (
    <BlockNoteViewRaw
      editor={editor}
      onChange={() => onChange(editor.document)}
      slashMenu={true}
      formattingToolbar={true}
      className="min-h-[300px] border rounded-xl p-4"
    />
  );
}