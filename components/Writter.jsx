import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { PhotographIcon } from "@heroicons/react/outline";

export const Writter = ({ className, text, setText }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: "w-20 inline-block mr-2",
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "h-96 w-full z-0 focus:outline-none bg-gray-100 rounded-sm p-3 dark:bg-gray-700",
      },
    },
    // triggered on every change
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      setText(json.content);
      console.log(json.content)
    },
    content: text,
  });

  const handleUploadFile = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result;
      // editor.insertImage(url);
      editor.chain().focus().setImage({ src: url }).run();
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(reader);
  };

  return (
    <div className={`relative ${className}`}>
      <EditorContent editor={editor} />
      <div className="-mt-6 absolute right-4 bottom-1">
        <label htmlFor="upload-image">
          <PhotographIcon className="h-6 w-6 text-gray-700 cursor-pointer dark:text-gray-100" />
        </label>
        <input
          id="upload-image"
          type="file"
          className="hidden"
          onChange={handleUploadFile}
        />
      </div>
    </div>
  );
};
