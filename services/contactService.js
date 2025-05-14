app.factory('ContactService', function () {
    var contacts = [
        { id: 1, name: 'Alice', email: 'alice@example.com', phone: 123456, category: 'Friends', createdAt: new Date().toISOString() },
        { id: 2, name: 'Bob', email: 'bob@example.com', phone: 654321, category: 'Family', createdAt: new Date().toISOString() },
        { id: 3, name: 'Calvin', email: 'calvin@example.com', phone: 987654, category: 'Work', createdAt: new Date().toISOString() }
    ];
    var nextId = 4;

    return {
        getAll: function () {
            return contacts;
        },
        getById: function (id) {
            return contacts.find(c => c.id == id);
        },
        add: function (contact) {
            contact.id = nextId++;
            contact.createdAt = new Date().toISOString();
            contacts.push(contact);
        },
        update: function (updated) {
            var index = contacts.findIndex(c => c.id == updated.id);
            if (index !== -1) {
                updated.createdAt = contacts[index].createdAt;
                contacts[index] = angular.copy(updated);
            }
        },
        delete: function (id) {
            var index = contacts.findIndex(c => c.id == id);
            if (index !== -1) contacts.splice(index, 1);
        }
    };
});
