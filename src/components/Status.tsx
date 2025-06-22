export default function Status({ status }: { status: string }) {
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-1 rounded-full mb-4
      ${
        status === "done"
          ? "bg-green-100 text-green-700 border border-green-200"
          : "bg-yellow-100 text-yellow-800 border border-yellow-200"
      }
    `}
    >
      {status === "done" ? "Terminé" : "En cours"}
    </span>
  );
}
