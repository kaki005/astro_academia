export const experiences = [
	{
		title: "Software Engineer",
		company: "Crev",
		time: "2021-2024",
		location: 'Osaka, Japan',
		description: '',
	},

	{
		company: 'SANKEN',
		time: '2024-Present',
		title: 'Specially Appointed Researcher',
		location: 'Osaka, Japan',
		description: '',
	},

];

export const education = [
	{
		school: 'The University of Osaka',
		time: '2020.04-2024.03',
		degree: 'Bachelor',
		location: 'Osaka, Japan',
		description: 'Department of Electronic and Information Engineering, School of Engineering',
	},
	{
		school: 'The University of Osaka',
		time: '2024.04-2026.03',
		degree: 'Master',
		location: 'Osaka, Japan',
		description: 'Graduate School of Information Science and Technology',
	},
	{
		school: 'The University of Osaka',
		time: '2026.04-Present',
		degree: 'Ph.D',
		location: 'Osaka, Japan',
		description: 'Graduate School of Information Science and Technology',
	},
];

export const skills = [
	{
		title: '',
		description: '',
	},
];

export const publications = [
	{
		title: 'Multi-Aspect Mining and Anomaly Detection for Heterogeneous Tensor Streams',
		authors: 'Soshi Kakio, Yasuko Matsubara, Ren Fujiwara, Yasushi Sakurai',
		journal: "Proceedings of the ACM Web Conference 2026 (WWW '26), April 13--17, 2026, Dubai, United Arab Emirates",
		time: '2026',
		link: 'https://github.com/kaki005/HeteroComp',
		abstract: "Analysis and anomaly detection in event tensor streams consisting of timestamps and multiple attributes —such as communication logs(time, IP address, packet length)—are essential tasks in data mining. " +
			"While existing tensor decomposition and anomaly detection methods provide useful insights, they face the following two limitations. " +
			"(i) They cannot handle heterogeneous tensor streams, which comprises both categorical attributes(e.g., IP address) and continuous attributes(e.g., packet length).They typically require either discretizing continuous attributes or treating categorical attributes as continuous, both of which distort the underlying statistical properties of the data.Furthermore, incorrect assumptions about the distribution family of continuous attributes often degrade the model’s performance. " +
			"(ii) They discretize timestamps, failing to track the temporal dynamics of streams(e.g., trends, abnormal events), which makes them ineffective for detecting anomalies at the group level, referred to as 'group anomalies' (e.g, DoS attacks). " +
			"To address these challenges, we propose HeteroComp, a method for continuously summarizing heterogeneous tensor streams into 'components' representing latent groups in each attribute and their temporal dynamics, and detecting group anomalies. " +
			"Our method employs Gaussian process priors to model unknown distributions of continuous attributes, and temporal dynamics, which directly estimate probability densities from data.Extracted components give concise but effective summarization, enabling accurate group anomaly detection. " +
			"Extensive experiments on real datasets demonstrate that HeteroComp outperforms the state - of - the - art algorithms for group anomaly detection accuracy, and its computational time does not depend on the data stream length.",
	}
];
