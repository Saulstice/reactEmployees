import employees from './employees'
export default {
    searchAll: function (query) {
        var results = [];
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].first_name.toLowerCase().includes(query.toLowerCase()) ||
                employees[i].last_name.toLowerCase().includes(query.toLowerCase())) {
                results.push(employees[i]);
            }
        }
        return results;
    }
};