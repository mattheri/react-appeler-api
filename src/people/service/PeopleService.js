import { config } from '../../config';

class PeopleService {
	endpoint = "people";
	baseUrl = config.baseUrl;
	peopleUrl = `${this.baseUrl}/${this.endpoint}`;

	async getAllPeople() {
		const res = await fetch(this.peopleUrl)
		if (!res.ok) throw new Error();
		const data = await res.json();
		return data.results;
	}

	async getPeopleById(id) {
		const res = await fetch(`${this.peopleUrl}/${id}`)
		if (!res.ok) throw new Error();
		return await res.json();
	}
}

export default PeopleService;