import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col gap-16 pt-10 pb-20 max-w-5xl mx-auto">
      
      {/* HEADER */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-center relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#ffb3c6]/20 blur-[100px] rounded-full -z-10" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
          Get in <span className="text-[#ffb3c6]">Touch</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a question about StudySync's matchmaking algorithm or want to report an issue? We're here to help.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* CONTACT INFO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="p-6 rounded-3xl bg-[#1C1C22]/80 backdrop-blur-md border border-white/5 flex items-center gap-6">
            <div className="p-4 bg-[#ffb3c6]/10 rounded-2xl text-[#ffb3c6]">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Email Us</h3>
              <p className="text-gray-400">support@studysync.edu.pk</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#1C1C22]/80 backdrop-blur-md border border-white/5 flex items-center gap-6">
            <div className="p-4 bg-[#c4a1ff]/10 rounded-2xl text-[#c4a1ff]">
              <MessageSquare size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Live Chat</h3>
              <p className="text-gray-400">Available Mon-Fri, 9am - 5pm</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#1C1C22]/80 backdrop-blur-md border border-white/5 flex items-center gap-6">
            <div className="p-4 bg-[#a3e6b2]/10 rounded-2xl text-[#a3e6b2]">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Office</h3>
              <p className="text-gray-400">Innovation Lab, FYP Department</p>
            </div>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="p-8 rounded-3xl bg-black/40 border border-white/10 shadow-[0_0_30px_rgba(255,179,198,0.1)]"
        >
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Name</label>
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-[#1C1C22] border border-white/5 focus:border-[#ffb3c6] outline-none text-white transition-colors" />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Email</label>
              <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-xl bg-[#1C1C22] border border-white/5 focus:border-[#ffb3c6] outline-none text-white transition-colors" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">Message</label>
              <textarea rows={5} placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl bg-[#1C1C22] border border-white/5 focus:border-[#ffb3c6] outline-none text-white transition-colors resize-none"></textarea>
            </div>

            <button type="button" className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-[#ffb3c6] to-[#c4a1ff] text-[#0F0F13] font-bold text-lg hover:shadow-[0_0_20px_rgba(255,179,198,0.4)] transition-shadow flex justify-center items-center gap-2">
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
