/**
 * Created by philipackermann on 26.10.14.
 */
var WebService = {
    listAllUsers: function() {
        return [{
            name: 'Max',
            lastname: 'Mustermann'
        }];
    }
}
function UserRepository() {
};
UserRepository.prototype.listAllUsers = function() {
    var cache = WebService.listAllUsers();
    UserRepository.prototype.listAllUsers = function() {
        return cache;
    }
    return cache;
};
UserRepository.prototype.filterUsers = function(filter) {
    return this.listAllUsers().filter(filter);
};
module.exports.WebService = WebService;
module.exports.UserRepository = UserRepository;