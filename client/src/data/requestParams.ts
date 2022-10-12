export const getOptions = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json; charset=UTF-8',
	},
};

export const userCreateOptions = (method:string , bodyObject: {}) => {
	return {
		method,
		body: JSON.stringify(bodyObject),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
	};
};

export const postCreateOptions = (method: string, bodyObject: {}) => {
	return {
		method,
		body: JSON.stringify(bodyObject),
	};
};

export const deleteOptions = {
	method: 'DELETE',
	headers: {
		'Content-Type': 'application/json; charset=UTF-8',
	},
};
