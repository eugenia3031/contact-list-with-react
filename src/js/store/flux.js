const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		BASEURL: `https://assets.breatheco.de/apis/fake/contact`,
		user: "eddiaz",
  
		contacts: [],
	  },
  
	  actions: {
		// Use getActions to call a function within a fuction
  
		//para traer todos los contactos
		allContacts: async () => {
		  try {
			let response = await fetch(
			  `${getStore().BASEURL}/agenda/${getStore().user}`
			);
  
			if (response.ok) {
			  let data = await response.json();
			  setStore({ contacts: data });
			  console.log(data);
			} else console.log("error al traer contactos");
		  } catch (err) {
			console.log(err);
		  }
		},
		// para agregar nuevos contactos
		addNewContact: async (newContact) => {
		  try {
			let response = await fetch(`${getStore().BASEURL}/`, {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify(newContact),
			});
			if (response.ok) {
			  getActions().allContacts();
			}
		  } catch (error) {
			console.log(error);
		  }
		},
		//borrar contacto
		deleteContact: async (id) => {
		  try {
			let response = await fetch(`${getStore().BASEURL}/${id}`, {
			  method: "DELETE",
			  headers: { "Content-Type": "application/json" },
			});
			if (response.ok) {
			  getActions().allContacts();
			}
		  } catch (error) {
			console.log(error);
		  }
		},
  
		//actualizar un contacto
		updateContact: async (id, newContact) => {
		  try {
			let response = await fetch(`${getStore().BASEURL}/${id}`, {
			  method: "PUT",
			  headers: { "Content-Type": "application/json" },
			  body: JSON.stringify(newContact),
			});
			if (response.ok) {
			  getActions().allContacts();
			}
		  } catch (error) {
			console.log(error);
		  }
		},
	  },
	};
  };
  
  export default getState;
