export default function ContactForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="flex flex-col gap-5"
    >
      <input
        type="hidden"
        name="access_key"
        value="58093b92-7f26-4368-98e2-1229e549a104"
      />
      <input type="hidden" name="from_name" value="Salminen contact form" />

      <div>
        <label
          htmlFor="name"
          className="block text-sm/6 font-medium text-white"
        >
          Name
        </label>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Sally Salminen"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-white"
        >
          Email
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm/6 font-medium text-white"
        >
          Message
        </label>
        <div className="mt-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            defaultValue={""}
          />
        </div>
      </div>

      <input type="checkbox" name="botcheck" className="hidden" />
      <input
        type="hidden"
        name="redirect"
        value={`${process.env.NEXT_PUBLIC_URL}/contact/success`}
      ></input>
      <div>
        <button
          type="submit"
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Submit Form
        </button>
      </div>
    </form>
  );
}
