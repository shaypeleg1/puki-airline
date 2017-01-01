// THIS WILL NOT HELP YOU!


import {App} from './App'

import * as $ from 'jquery'

const ENDPOINT_URL_PASSENGERS = 'server/passenger.php';

function renderPassengers(data) {
    let passengers = JSON.parse(data);

    let htmls = passengers.map(p =>
        `<li>
        ${p.username} - Age:${p.age}  (id: ${p.id})
        <button class="btnDelete" data-passenger-id="${p.id}">X</button>
        <button class="btnUpdate" data-passenger-id="${p.id}">Age++</button>
        </li>`
    );
    $('#passengers').html(htmls.join(''));


    //Set the event listener for delete buttons
    $('#passengers').find('button.btnDelete').each((idx, b) => {
        $(b).click(() => {

            const id = $(b).data('passengerId');

            $.ajax({
                url: ENDPOINT_URL_PASSENGERS + '?id=' + id,
                type: 'DELETE',
                success: renderPassengers
            });
        });
    });

     //Set the event listener for update buttons
    $('#passengers').find('button.btnUpdate').each((idx, b) => {
        $(b).click(() => {

            const id = $(b).data('passengerId');

            $.ajax({
                url: ENDPOINT_URL_PASSENGERS + '?id=' + id,
                type: 'PUT',
                success: renderPassengers
            });
        });
    });
}


$(document).ready(function () {
    console.log('Dom Ready');

    $.get(ENDPOINT_URL_PASSENGERS, renderPassengers);


    $('#frmAdd').submit(function (ev) {
        ev.preventDefault();
        $.post(ENDPOINT_URL_PASSENGERS, $('#frmAdd').serialize(), renderPassengers)
    });

    console.log('Sent the Request! Im available for other things');
});

