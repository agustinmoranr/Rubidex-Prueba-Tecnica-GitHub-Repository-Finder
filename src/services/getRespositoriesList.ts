import type { RepositoryCardProps } from '../pages/SearchRepositoriesPage/components/RepositoryCard';

export type getRepositoriesListInput = {
	username: string;
};

export interface getRepositoriesResponse extends RepositoryCardProps {
	id: number;
}

export async function getRepositoriesList({
	username,
}: getRepositoriesListInput): Promise<getRepositoriesResponse[] | undefined> {
	try {
		const response = await fetch(
			`https://api.github.com/users/${username}/repos`,
		);

		const result = await response.json();

		if (!response.ok) {
			throw new Error(result.message);
		}

		return result;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
