'use strict';

// Used jQuery and ajax as specified by the randomuser.me website
class UserSuggestions {
    constructor(suggestionsClass) {
        this.suggestionsList = $(`.${suggestionsClass}`);
    }
  
    fetchUsers(count = 10) {
        $.ajax({
            url: `https://randomuser.me/api/?results=${count}`,
            dataType: 'json',
            success: (data) => {
                this.displayUsers(data.results);
            },
            error: (error) => {
                console.error('Error fetching users:', error);
            }
        });
    }
  
    displayUsers(users) {
        this.suggestionsList.empty();
  
        users.forEach(user => {
            const listItem = $(`
                <li class="user-item">
                    <img class="user-photo" src="${user.picture.thumbnail}" alt="${user.name.first} ${user.name.last}">
                    <div class="user-details">
                        <p class="user-name">${user.name.first} ${user.name.last}</p>
                        <p class="user-city">${user.location.city}</p>
                    </div>
                </li>
            `);
  
            this.suggestionsList.append(listItem);
        });
    }
  }
  
  const suggestions = new UserSuggestions('user-suggestions');
  suggestions.fetchUsers(10);
  