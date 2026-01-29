import { Experience, Education, ELocationId, FacurityId, ERoleId, EDegree, EPublicationId } from "@/types/cv";
import { type Skill, Publication } from "@/types/cv";
import { EPersonId } from "@/types/person";
import { PERSON_DIC } from "../data/person";
import { LinkedIcon } from "@/types/icon";
import HeteroCompThumnail from "@/assets/heterocomp.png";
export const experiences: Experience[] = [
	new Experience(FacurityId.Crev, new Date(2021, 3), ERoleId.Engineer, ELocationId.Osaka),
	new Experience(FacurityId.SANKEN, new Date(2024, 3), ERoleId.ResearcherS, ELocationId.Osaka),
];

export const education: Education[] = [
	new Education(EDegree.Bachelor, FacurityId.Handai, new Date(2020, 3), ELocationId.Osaka, new Date(2024, 2)),
	new Education(EDegree.Master, FacurityId.Handai, new Date(2024, 3), ELocationId.Osaka, new Date(2026, 2)),
	new Education(EDegree.Doctor, FacurityId.Handai, new Date(2026, 3), ELocationId.Osaka),
];

export const skills: Skill[] = []

export const publications: Publication[] = [
	new Publication(
		EPublicationId.HeteroComp,
		'Multi-Aspect Mining and Anomaly Detection for Heterogeneous Tensor Streams',
		[PERSON_DIC[EPersonId.Me], PERSON_DIC[EPersonId.Matsubara], PERSON_DIC[EPersonId.Ren], PERSON_DIC[EPersonId.Sakurai]],
		[new LinkedIcon("code&datasets", "https://github.com/kaki005/HeteroComp", "github")],
		true,
		HeteroCompThumnail,
		"Analysis and anomaly detection in event tensor streams consisting of timestamps and multiple attributes —such as communication logs(time, IP address, packet length)—are essential tasks in data mining. " +
		"While existing tensor decomposition and anomaly detection methods provide useful insights, they face the following two limitations. " +
		"(i) They cannot handle heterogeneous tensor streams, which comprises both categorical attributes(e.g., IP address) and continuous attributes(e.g., packet length).They typically require either discretizing continuous attributes or treating categorical attributes as continuous, both of which distort the underlying statistical properties of the data.Furthermore, incorrect assumptions about the distribution family of continuous attributes often degrade the model’s performance. " +
		"(ii) They discretize timestamps, failing to track the temporal dynamics of streams(e.g., trends, abnormal events), which makes them ineffective for detecting anomalies at the group level, referred to as 'group anomalies' (e.g, DoS attacks). " +
		"To address these challenges, we propose HeteroComp, a method for continuously summarizing heterogeneous tensor streams into 'components' representing latent groups in each attribute and their temporal dynamics, and detecting group anomalies. " +
		"Our method employs Gaussian process priors to model unknown distributions of continuous attributes, and temporal dynamics, which directly estimate probability densities from data.Extracted components give concise but effective summarization, enabling accurate group anomaly detection. " +
		"Extensive experiments on real datasets demonstrate that HeteroComp outperforms the state - of - the - art algorithms for group anomaly detection accuracy, and its computational time does not depend on the data stream length.",
		"The ACM Web Conference 2026 (WWW '26)",
		3370, // 投稿数
		676,	// 採択数
		"Dubai, United Arab Emirates",
		'April 13--17, 2026',
	)
];
