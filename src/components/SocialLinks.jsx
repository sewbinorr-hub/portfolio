const SocialLinks = () => {
  const socialLinks = [
    { icon: 'code', href: '#', label: 'GitHub' },
    { icon: 'mail', href: '#', label: 'Email' },
    { icon: 'terminal', href: '#', label: 'LinkedIn' },
  ]

  return (
    <div className="absolute bottom-6 w-full flex justify-center z-20 pointer-events-none">
      <div className="flex gap-6 pointer-events-auto">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-500 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
            aria-label={link.label}
          >
            <span className="material-symbols-outlined text-2xl">{link.icon}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks
