import { useEffect, useState, type SubmitEventHandler } from 'react';
import { SearchInput } from '../../../components/SearchInput';
import Button from '../../../components/ui/Button';
import { useSearchStore } from '../../../stores/useSearchStore';

export function SearchRepositoriesForm() {
	const searchedUsername = useSearchStore((state) => state.searchedUsername);
	const setSearchUsername = useSearchStore((state) => state.setSearchUsername);
	const [username, setUsername] = useState<string>('');

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		if (username.trim()) {
			setSearchUsername(username.trim());
		}
	};

	useEffect(() => {
		if (searchedUsername !== username) {
			setUsername(searchedUsername);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchedUsername, setSearchUsername]);

	return (
		<form className='flex mx-auto gap-2' onSubmit={handleSubmit}>
			<SearchInput
				name='username'
				placeholder='Buscar username de Github'
				value={username}
				onChange={setUsername}
				className='min-w-96'
			/>

			<Button type='submit'>Buscar</Button>
		</form>
	);
}

export default SearchRepositoriesForm;
