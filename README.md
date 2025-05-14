# Contact Manager AngularJS

A simple single-page application (SPA) built using AngularJS that allows users to manage a list of contacts. The app supports Create, Read, Update, and Delete (CRUD) operations with additional features such as sorting andfiltering.


## 🚀 Features

- Add new contacts with name, email, phone number, and category  
- Edit existing contact details  
- Delete contacts with confirmation  
- View all contacts in a sortable and filterable table  
- Visual indicators for sorting columns  
- Search bar to filter contacts by name  
- Dropdown filter for categories (e.g., Family, Friends, Work, Others)  
- Responsive and styled UI with navbar navigation  
- Timestamp showing when contact was created  

## 🧰 Technologies Used

- AngularJS (1.8.2)  
- HTML5, CSS3  
- JavaScript  
- Bootstrap-like custom styling

## 📁 Project Structure

```
contact-manager-angularjs/
├── index.html
├── app.js
├── controllers/
│   └── ContactController.js
├── services/
│   └── ContactService.js
├── views/
│   ├── list.html
│   ├── add.html
│   └── edit.html
├── css/
│   └── styles.css
├── README.md
```

## 🛠️ Installation & Setup

1. **Clone the Repository**

```bash
git clone https://github.com/Qixuan-Codes/contact-manager-angularjs.git
cd contact-manager-angularjs
```

2. **Open in Browser**

You can simply open `index.html` in your web browser, or use a local server:

If you have Python installed:
```bash
# Python 3
python -m http.server 8000
# Then visit http://localhost:8000
```

Alternatively, use the Live Server extension in VSCode for best experience.

## 🔄 Routing Overview

- `/contacts` - List of all contacts  
- `/add` - Add a new contact  
- `/edit/:id` - Edit a contact by ID  

## ✅ To-Do / Ideas for Future Enhancements

- Add pagination for large lists  
- Export contacts to CSV  
- Add user login & authentication  
- Store data in Firebase or backend DB  
- Form validations using AngularJS `ngMessages`  

## 📝 License

This project is open source and available.

---

Made with ❤️ using AngularJS
