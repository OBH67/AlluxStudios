"use client";

export default function About() {
	const stats = [
		{ number: '5+', label: 'Años de Experiencia' },
		{ number: '24/7', label: 'Soporte Técnico' },
	];

	const values = [
		{
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			),
			title: 'Calidad',
			description: 'Comprometidos con la excelencia en cada proyecto',
		},
		{
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			),
			title: 'Innovación',
			description: 'Usando tecnologías de vanguardia',
		},
		{
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			),
			title: 'Puntualidad',
			description: 'Entregamos en tiempo y forma',
		},
		{
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
				</svg>
			),
			title: 'Colaboración',
			description: 'Trabajamos junto a ti en cada paso',
		},
	];

	return (
		<section id="nosotros" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
			{/* Background effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
			</div>

			<div className="relative z-10 container mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
						Sobre{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
							Nosotros
						</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
						Transformamos ideas en experiencias digitales excepcionales
					</p>
					<div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
				</div>

				<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
					{/* Left content */}
					<div className="space-y-6">
						<h3 className="text-3xl md:text-4xl font-bold text-white">
							Creamos soluciones digitales que{' '}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
								impulsan tu negocio
							</span>
						</h3>
						<p className="text-lg text-gray-400 leading-relaxed">
							Somos un equipo apasionado de desarrolladores, diseñadores y estrategas digitales dedicados a transformar la presencia online de nuestros clientes.
						</p>
						<p className="text-lg text-gray-400 leading-relaxed">
							Con más de 5 años de experiencia en el mercado, hemos ayudado a decenas de empresas a alcanzar sus objetivos digitales mediante soluciones innovadoras y personalizadas.
						</p>
            
						{/* Values */}
						<div className="grid grid-cols-2 gap-4 pt-6">
							{values.map((value, index) => (
								<div
									key={index}
									className="group p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
								>
									<div className="flex items-start gap-3">
										<div className="text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
											{value.icon}
										</div>
										<div>
											<h4 className="text-white font-semibold mb-1">{value.title}</h4>
											<p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
												{value.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right content - Stats */}
					<div className="relative">
						{/* Glow effect */}
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
            
						<div className="relative grid grid-cols-2 gap-6">
							{stats.map((stat, index) => (
								<div
									key={index}
									className="group relative"
								>
									{/* Card glow */}
									<div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
									{/* Card */}
									<div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 group-hover:border-cyan-500/50 rounded-2xl p-8 text-center transition-all duration-300 hover:transform hover:scale-105">
										<div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-3 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
											{stat.number}
										</div>
										<div className="text-gray-400 font-medium">
											{stat.label}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Mission, Vision, Values Section */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
					{/* Misión */}
					<div className="relative group flex">
						<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
						<div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 group-hover:border-blue-500/50 rounded-3xl p-8 lg:p-6 text-center transition-all duration-300 flex flex-col w-full">
							<div className="text-4xl mb-4">🎯</div>
							<h3 className="text-2xl lg:text-2xl xl:text-3xl font-bold text-white mb-4">
								Misión
							</h3>
							<p className="text-base lg:text-sm xl:text-base text-gray-400 leading-relaxed">
								Ayudar a empresas y emprendedores a fortalecer su imagen y presencia digital mediante consultoría estratégica, desarrollo de soluciones tecnológicas y herramientas innovadoras que optimicen sus procesos, mejoren su visibilidad y potencien su crecimiento en internet.
							</p>
						</div>
					</div>

					{/* Visión - Destacada */}
					<div className="relative group flex lg:-mt-4 lg:mb-4">
						<div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
						<div className="relative bg-gray-900/90 backdrop-blur-sm border border-cyan-500/50 group-hover:border-cyan-400/70 rounded-3xl p-8 lg:p-6 text-center transition-all duration-300 flex flex-col w-full">
							<div className="text-5xl mb-4">🚀</div>
							<h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold text-white mb-4">
								Visión
							</h3>
							<p className="text-base lg:text-sm xl:text-base text-gray-300 leading-relaxed">
								Ser una consultoría líder en transformación digital para negocios, reconocida por impulsar el crecimiento de empresas mediante soluciones tecnológicas innovadoras, estrategias digitales efectivas y automatización inteligente, ayudándolas a destacar y posicionarse en el mundo online.
							</p>
						</div>
					</div>

					{/* Valores */}
					<div className="relative group flex">
						<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
						<div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 group-hover:border-blue-500/50 rounded-3xl p-8 lg:p-6 transition-all duration-300 flex flex-col w-full">
							<div className="text-4xl mb-4 text-center">💎</div>
							<h3 className="text-2xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 text-center">
								Valores
							</h3>
							<div className="space-y-3">
								<div className="flex items-start gap-2">
									<div className="text-cyan-400 mt-1 flex-shrink-0">
										<svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
									</div>
									<div className="flex-1">
										<h4 className="text-white font-semibold text-sm lg:text-xs xl:text-sm">Innovación</h4>
										<p className="text-gray-500 text-xs lg:text-xs">Adoptamos nuevas tecnologías y tendencias digitales.</p>
									</div>
								</div>
								<div className="flex items-start gap-2">
									<div className="text-cyan-400 mt-1 flex-shrink-0">
										<svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
									<div className="flex-1">
										<h4 className="text-white font-semibold text-sm lg:text-xs xl:text-sm">Compromiso</h4>
										<p className="text-gray-500 text-xs lg:text-xs">Socios estratégicos en su crecimiento.</p>
									</div>
								</div>
								<div className="flex items-start gap-2">
									<div className="text-cyan-400 mt-1 flex-shrink-0">
										<svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
										</svg>
									</div>
									<div className="flex-1">
										<h4 className="text-white font-semibold text-sm lg:text-xs xl:text-sm">Profesionalismo</h4>
										<p className="text-gray-500 text-xs lg:text-xs">Altos estándares de calidad.</p>
									</div>
								</div>
								<div className="flex items-start gap-2">
									<div className="text-cyan-400 mt-1 flex-shrink-0">
										<svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
										</svg>
									</div>
									<div className="flex-1">
										<h4 className="text-white font-semibold text-sm lg:text-xs xl:text-sm">Transparencia</h4>
										<p className="text-gray-500 text-xs lg:text-xs">Comunicación honesta y directa.</p>
									</div>
								</div>
								<div className="flex items-start gap-2">
									<div className="text-cyan-400 mt-1 flex-shrink-0">
										<svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
										</svg>
									</div>
									<div className="flex-1">
										<h4 className="text-white font-semibold text-sm lg:text-xs xl:text-sm">Enfoque en resultados</h4>
										<p className="text-gray-500 text-xs lg:text-xs">Impacto real y medible.</p>
									</div>
								</div>
								<div className="flex items-start gap-2">
									<div className="text-cyan-400 mt-1 flex-shrink-0">
										<svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
										</svg>
									</div>
									<div className="flex-1">
										<h4 className="text-white font-semibold text-sm lg:text-xs xl:text-sm">Adaptabilidad</h4>
										<p className="text-gray-500 text-xs lg:text-xs">Soluciones personalizadas.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
