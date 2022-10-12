import { userCreateOptions } from '../data/requestParams';

export const createUser = async (username: string, password: string, password2: string) => {
	if (!username || !password || !password2) return;

	try {
		const response = await fetch(
			'/api/user',
			userCreateOptions('POST', { username, password, password2 })
		);

		const data = await response.json();

		if (response.ok) {
			return data;
		}

		throw new Error(data.message);

	} catch (err) {
		if(err instanceof Error) {
      return Promise.reject(err);
    }
	}
};

export const loginUser = async (username:string, password: string) => {
	if (!username || !password) return;

	try {
		const response = await fetch(
			'/api/session',
			userCreateOptions('POST', { username, password })
		);

		const data = await response.json();

		if (response.ok) {
			return data;
		}

		throw new Error(data.message);
	} catch (err) {
		if(err instanceof Error) {
      return Promise.reject(err);
    }
	}
};

export const verifyUser = async () => {
	try {
		const response = await fetch('/api/session', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		});

		const data = await response.json();

		if (response.ok) {
			return data.user;
		}

		throw new Error(data.message);
	} catch (err) {
		if(err instanceof Error) {
      return Promise.reject(err);
    }
	}
};
