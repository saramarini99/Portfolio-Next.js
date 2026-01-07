"use client"
import { useState } from 'react'
import BaseButton from '@/components/BaseButton'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // alert('Thank you for your message! I will get back to you shortly.')
  }

  return (
    <section className="max-w-lg mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border rounded p-2" required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border rounded p-2" required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows={5} className="w-full border rounded p-2" required />
        <BaseButton type="primary">Send</BaseButton>
      </form>
    </section>
  )
}
