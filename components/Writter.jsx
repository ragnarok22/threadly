import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";

export const Writter = ({ className, text, setText }) => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    editorProps: {
      attributes: {
        class: "h-96 w-full focus:outline-none bg-gray-100 rounded-sm p-3 dark:bg-gray-700",
      },
    },
    // triggered on every change
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      let content = "";
      // console.log(json)

      if (json.type === "doc") {
        content = json.content.map((node) => {
          if (node.type === "text") {
            return node.text;
          }
          if (node.type === "paragraph") {
            return node.content?.map((node) => {
              if (node.type === "text") {
                return node.text;
              }
            });
          }
        });
      }
      // console.log(content);
      setText(content);
      // send the content to an API here
    },
    content: text,
  });
  return (
    <div className={`${className}`}>
      <EditorContent
        editor={editor}
      />

      {/* <textarea
        placeholder="escribe aquí"
        spellCheck="true"
        className="h-96 w-full focus:outline-none bg-gray-100 rounded-sm p-3 dark:bg-gray-700"
        value={text}
        onChange={(e) => setText(e.target.value)}
      /> */}
    </div>
  );
};
