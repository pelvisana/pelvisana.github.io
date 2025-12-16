import type { Lang } from './config';

export const STRINGS: Record<
	Lang,
	{
		siteName: string;
		tagline: string;
		nav: { home: string; app: string; evidence: string; faq: string; support: string };
		cta: { getApp: string; contact: string };
		store: { googlePlay: string; appStore: string; comingSoon: string };
		footer: { medicalDisclaimer: string; copyright: string };
		home: {
			title: string;
			description: string;
			primaryCta: string;
			secondaryCta: string;
			sections: {
				download: { title: string; body: string };
				what: { title: string; body: string };
				why: { title: string; items: { title: string; body: string }[] };
				evidence: { title: string; body: string; cta: string };
				safety: { title: string; body: string };
			};
		};
		app: {
			title: string;
			description: string;
			features: { title: string; items: { title: string; body: string }[] };
		};
		evidence: { title: string; description: string; cta: string };
		faq: { title: string; description: string; items: { q: string; a: string }[] };
		support: { title: string; description: string; emailLabel: string };
		legal: { privacy: { title: string }; terms: { title: string } };
	}
> = {
	en: {
		siteName: 'Pelvisana',
		tagline: 'Pelvic floor health, grounded in evidence.',
		nav: { home: 'Home', app: 'App', evidence: 'Evidence', faq: 'FAQ', support: 'Support' },
		cta: { getApp: 'Get the app', contact: 'Contact' },
		store: { googlePlay: 'Get it on Google Play', appStore: 'Download on the App Store', comingSoon: 'Coming soon' },
		footer: {
			medicalDisclaimer:
				'Medical disclaimer: Pelvisana provides educational information and is not a substitute for professional medical advice, diagnosis, or treatment.',
			copyright: '© Pelvisana',
		},
		home: {
			title: 'Build better pelvic floor habits — with clarity and confidence',
			description:
				'Pelvisana is a pelvic floor health app designed to help you learn, practice, and stay consistent with evidence-based pelvic floor muscle training.',
			primaryCta: 'Explore the evidence',
			secondaryCta: 'See app features',
			sections: {
				download: {
					title: 'Download',
					body: 'Start with the guided routines and track your progress over time.',
				},
				what: {
					title: 'What is Pelvisana?',
					body: 'A practical companion for pelvic floor muscle training (PFMT): clear guidance, approachable routines, and education you can trust.',
				},
				why: {
					title: 'Why pelvic floor training matters',
					items: [
						{
							title: 'First-line for many symptoms',
							body: 'Guidelines commonly recommend PFMT as a first-line conservative option for urinary incontinence and pelvic organ prolapse symptoms.',
						},
						{
							title: 'Consistency beats intensity',
							body: 'Adherence is often the hard part. Pelvisana focuses on sustainable habits and trackable progress.',
						},
						{
							title: 'Technique matters',
							body: 'Learning how to contract and relax correctly is key—especially if pain, overactivity, or postpartum changes are present.',
						},
					],
				},
				evidence: {
					title: 'Evidence and references',
					body: 'We summarize key recommendations and high-quality research (including guideline sources and systematic reviews).',
					cta: 'Read the evidence page',
				},
				safety: {
					title: 'Safety first',
					body: 'If you have pelvic pain, unexplained bleeding, fever, a recent surgery, or you are pregnant/postpartum with concerning symptoms, seek care from a qualified clinician.',
				},
			},
		},
		app: {
			title: 'App features',
			description: 'Designed for learning, practice, and long-term adherence.',
			features: {
				title: 'What you can do with Pelvisana',
				items: [
					{ title: 'Guided PFMT routines', body: 'Step-by-step sessions with clear pacing and rest.' },
					{ title: 'Education that stays readable', body: 'Short explanations, practical tips, and a focus on technique.' },
					{ title: 'Progress tracking', body: 'Build consistency and review your training history over time.' },
				],
			},
		},
		evidence: {
			title: 'Evidence',
			description:
				'Pelvic floor muscle training (PFMT) is supported by clinical guidelines and systematic reviews for several common pelvic floor symptoms.',
			cta: 'Explore sources and how we translate them into the app.',
		},
		faq: {
			title: 'FAQ',
			description: 'Quick answers about pelvic floor training and how Pelvisana approaches it.',
			items: [
				{
					q: 'Is Pelvisana a medical device?',
					a: 'Pelvisana is an educational app and does not replace assessment or treatment by a qualified clinician.',
				},
				{
					q: 'Can PFMT help with urinary leakage?',
					a: 'PFMT is widely recommended as a first-line conservative option for many types of urinary incontinence. Individual results vary.',
				},
				{
					q: 'Should PFMT ever hurt?',
					a: 'Pain is a reason to stop and seek professional guidance—especially with pelvic pain, postpartum complications, or suspected overactivity.',
				},
			],
		},
		support: {
			title: 'Support',
			description: 'Questions, feedback, or clinical collaboration? We’d love to hear from you.',
			emailLabel: 'Email',
		},
		legal: { privacy: { title: 'Privacy Policy' }, terms: { title: 'Terms of Use' } },
	},
	es: {
		siteName: 'Pelvisana',
		tagline: 'Salud del suelo pélvico, basada en evidencia.',
		nav: { home: 'Inicio', app: 'App', evidence: 'Evidencia', faq: 'Preguntas', support: 'Soporte' },
		cta: { getApp: 'Descargar la app', contact: 'Contacto' },
		store: { googlePlay: 'Disponible en Google Play', appStore: 'Descargar en App Store', comingSoon: 'Próximamente' },
		footer: {
			medicalDisclaimer:
				'Aviso médico: Pelvisana ofrece información educativa y no sustituye el consejo, diagnóstico o tratamiento de un profesional sanitario.',
			copyright: '© Pelvisana',
		},
		home: {
			title: 'Mejora tus hábitos del suelo pélvico — con claridad y confianza',
			description:
				'Pelvisana es una app de salud del suelo pélvico diseñada para ayudarte a aprender, practicar y mantener la constancia con entrenamiento basado en evidencia.',
			primaryCta: 'Ver la evidencia',
			secondaryCta: 'Ver funciones de la app',
			sections: {
				download: {
					title: 'Descargar',
					body: 'Empieza con rutinas guiadas y haz seguimiento de tu progreso con el tiempo.',
				},
				what: {
					title: '¿Qué es Pelvisana?',
					body: 'Un acompañamiento práctico para el entrenamiento de la musculatura del suelo pélvico (PFMT): guía clara, rutinas accesibles y educación fiable.',
				},
				why: {
					title: 'Por qué importa entrenar el suelo pélvico',
					items: [
						{
							title: 'Primera línea para muchos síntomas',
							body: 'Las guías clínicas suelen recomendar el PFMT como opción conservadora de primera línea para la incontinencia urinaria y síntomas de prolapso.',
						},
						{
							title: 'La constancia gana a la intensidad',
							body: 'La adherencia suele ser lo más difícil. Pelvisana prioriza hábitos sostenibles y progreso medible.',
						},
						{
							title: 'La técnica es clave',
							body: 'Aprender a contraer y relajar correctamente es fundamental—especialmente con dolor, hipertonía o cambios posparto.',
						},
					],
				},
				evidence: {
					title: 'Evidencia y referencias',
					body: 'Resumimos recomendaciones clave y estudios de alta calidad (incluyendo guías y revisiones sistemáticas).',
					cta: 'Leer la evidencia',
				},
				safety: {
					title: 'Seguridad ante todo',
					body: 'Si tienes dolor pélvico, sangrado sin explicación, fiebre, cirugía reciente, o estás embarazada/posparto con síntomas preocupantes, consulta a un profesional.',
				},
			},
		},
		app: {
			title: 'Funciones de la app',
			description: 'Diseñada para aprender, practicar y mantener la adherencia.',
			features: {
				title: 'Qué puedes hacer con Pelvisana',
				items: [
					{ title: 'Rutinas guiadas de PFMT', body: 'Sesiones paso a paso con ritmo claro y descansos.' },
					{ title: 'Educación fácil de leer', body: 'Explicaciones cortas, consejos prácticos y foco en técnica.' },
					{ title: 'Seguimiento de progreso', body: 'Construye constancia y revisa tu historial con el tiempo.' },
				],
			},
		},
		evidence: {
			title: 'Evidencia',
			description:
				'El entrenamiento del suelo pélvico (PFMT) está respaldado por guías clínicas y revisiones sistemáticas para varios síntomas frecuentes.',
			cta: 'Explora fuentes y cómo las traducimos a la app.',
		},
		faq: {
			title: 'Preguntas frecuentes',
			description: 'Respuestas rápidas sobre PFMT y el enfoque de Pelvisana.',
			items: [
				{
					q: '¿Pelvisana es un dispositivo médico?',
					a: 'Pelvisana es una app educativa y no sustituye la valoración o tratamiento por un profesional sanitario.',
				},
				{
					q: '¿El PFMT puede ayudar con escapes de orina?',
					a: 'El PFMT se recomienda ampliamente como opción conservadora de primera línea para muchos tipos de incontinencia. Los resultados varían.',
				},
				{
					q: '¿El PFMT debería doler?',
					a: 'El dolor es un motivo para parar y pedir guía profesional—especialmente con dolor pélvico, complicaciones posparto o sospecha de hipertonía.',
				},
			],
		},
		support: {
			title: 'Soporte',
			description: '¿Dudas, feedback o colaboración clínica? Escríbenos.',
			emailLabel: 'Email',
		},
		legal: { privacy: { title: 'Política de privacidad' }, terms: { title: 'Términos de uso' } },
	},
	ca: {
		siteName: 'Pelvisana',
		tagline: 'Salut del sòl pelvià, basada en evidència.',
		nav: { home: 'Inici', app: 'App', evidence: 'Evidència', faq: 'Preguntes', support: 'Suport' },
		cta: { getApp: 'Obtenir l’app', contact: 'Contacte' },
		store: { googlePlay: 'Disponible a Google Play', appStore: 'Descarregar a l’App Store', comingSoon: 'Properament' },
		footer: {
			medicalDisclaimer:
				'Avís mèdic: Pelvisana ofereix informació educativa i no substitueix el consell, diagnòstic o tractament d’un professional sanitari.',
			copyright: '© Pelvisana',
		},
		home: {
			title: 'Millora els hàbits del sòl pelvià — amb claredat i confiança',
			description:
				'Pelvisana és una app de salut del sòl pelvià pensada per ajudar-te a aprendre, practicar i mantenir la constància amb entrenament basat en evidència.',
			primaryCta: 'Veure l’evidència',
			secondaryCta: 'Veure funcions de l’app',
			sections: {
				download: {
					title: 'Descarregar',
					body: 'Comença amb rutines guiades i fes seguiment del teu progrés amb el temps.',
				},
				what: {
					title: 'Què és Pelvisana?',
					body: 'Un acompanyament pràctic per a l’entrenament de la musculatura del sòl pelvià (PFMT): guia clara, rutines assequibles i educació fiable.',
				},
				why: {
					title: 'Per què importa entrenar el sòl pelvià',
					items: [
						{
							title: 'Primera línia per a molts símptomes',
							body: 'Les guies clíniques sovint recomanen el PFMT com a opció conservadora de primera línia per a la incontinència urinària i símptomes de prolapse.',
						},
						{
							title: 'La constància guanya a la intensitat',
							body: 'L’adherència acostuma a ser el més difícil. Pelvisana prioritza hàbits sostenibles i progrés mesurable.',
						},
						{
							title: 'La tècnica és clau',
							body: 'Aprendre a contreure i relaxar correctament és essencial—especialment amb dolor, hipertonía o canvis postpart.',
						},
					],
				},
				evidence: {
					title: 'Evidència i referències',
					body: 'Resumim recomanacions clau i recerca d’alta qualitat (incloent guies i revisions sistemàtiques).',
					cta: 'Llegir l’evidència',
				},
				safety: {
					title: 'Seguretat primer',
					body: 'Si tens dolor pelvià, sagnat sense explicació, febre, cirurgia recent, o estàs embarassada/postpart amb símptomes preocupants, consulta un professional.',
				},
			},
		},
		app: {
			title: 'Funcions de l’app',
			description: 'Dissenyada per aprendre, practicar i mantenir l’adherència.',
			features: {
				title: 'Què pots fer amb Pelvisana',
				items: [
					{ title: 'Rutines guiades de PFMT', body: 'Sessions pas a pas amb ritme clar i descansos.' },
					{ title: 'Educació fàcil de llegir', body: 'Explicacions curtes, consells pràctics i focus en tècnica.' },
					{ title: 'Seguiment del progrés', body: 'Construeix constància i revisa l’historial amb el temps.' },
				],
			},
		},
		evidence: {
			title: 'Evidència',
			description:
				'L’entrenament del sòl pelvià (PFMT) està recolzat per guies clíniques i revisions sistemàtiques per a diversos símptomes freqüents.',
			cta: 'Explora fonts i com les traduïm a l’app.',
		},
		faq: {
			title: 'Preguntes freqüents',
			description: 'Respostes ràpides sobre PFMT i l’enfocament de Pelvisana.',
			items: [
				{
					q: 'Pelvisana és un dispositiu mèdic?',
					a: 'Pelvisana és una app educativa i no substitueix la valoració o tractament d’un professional sanitari.',
				},
				{
					q: 'El PFMT pot ajudar amb pèrdues d’orina?',
					a: 'El PFMT es recomana àmpliament com a opció conservadora de primera línia per a molts tipus d’incontinència. Els resultats varien.',
				},
				{
					q: 'El PFMT hauria de fer mal?',
					a: 'El dolor és un motiu per parar i demanar guia professional—especialment amb dolor pelvià, complicacions postpart o sospita d’hipertonía.',
				},
			],
		},
		support: {
			title: 'Suport',
			description: 'Dubtes, feedback o col·laboració clínica? Escriu-nos.',
			emailLabel: 'Email',
		},
		legal: { privacy: { title: 'Política de privacitat' }, terms: { title: 'Termes d’ús' } },
	},
};
