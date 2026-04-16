
export default function location() {
    return (
        <main>
            <section className="max-w-2xl mx-auto p-6 bg-white">
                <form className="flex flex-col gap-4">
                    {/* Name Input - Full Width */}
                    <div>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                        required
                    />
                    </div>

                    {/* Phone and Email - Two Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                        required
                    />
                    </div>

                    {/* Message Textarea */}
                    <div>
                    <textarea
                        placeholder="Message"
                        rows={6}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
                        required
                    ></textarea>
                    </div>

                    {/* Optional Submit Button */}
                    <button
                    type="submit"
                    className="w-full bg-black text-white font-semibold py-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                    Send Message
                    </button>
                </form>
            </section>
        </main>
    )
}