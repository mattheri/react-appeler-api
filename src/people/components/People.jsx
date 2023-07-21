import { useQuery } from '@tanstack/react-query';
import PeopleService from '../service/PeopleService';

const peopleService = new PeopleService();

const People = () => {
	const { isError, isLoading, error, data } = useQuery({
		queryKey: ["people"],
		queryFn: () => peopleService.getAllPeople(),
	})

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>{error.message}</div>
	return <div>{data && data.map(people => {
		return (
			<div key={people.name}>
				<h2>{people.name}</h2>
				<p>{people.birth_year}</p>
			</div>
		)
	})}</div>
}

export default People;