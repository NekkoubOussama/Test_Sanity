export default function FullLoginPage() {
  return (
    <main className="p-10">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-black rounded-2xl text-white px-4 py-2"
        >
          Login
        </button>
      </form>
    </main>
  );
}
