$(document).ready(function () {


    let getDataBtn = $('#getDataBtn');
    let tBody = $('#tableBody');

    getDataBtn.click(function () {

        // $.ajax({
        //     url: 'https://jsonplaceholder.typicode.com/users',
        //     success: function (result) {
        //         console.log(result);
        //         if (result.length > 1) {
        //             for (let user of result) {
        //                 tBody.append(
        //                     `<tr>
        //                         <td>${user.id}</td>
        //                         <td>${user.name}</td>
        //                         <td>${user.username}</td>
        //                         <td>${user.email}</td>
        //                         <td>${user.website}</td>
        //                     </tr>`
        //                 );
        //             }
        //         } else {
        //             tBody.append(
        //                 `<tr>
        //                     <td>${result.id}</td>
        //                     <td>${result.name}</td>
        //                     <td>${result.username}</td>
        //                     <td>${result.email}</td>
        //                     <td>${result.website}</td>
        //                 </tr>`
        //             );
        //         }
        //     },
        //     error: function (error) {
        //         console.log(error);
        //     }
        // })

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                res.json()
                    .then(users => {
                        if (users.length > 1) {
                            for (let user of users) {
                                tBody.append(
                                    `<tr>
                                            <td>${user.id}</td>
                                            <td>${user.name}</td>
                                            <td>${user.username}</td>
                                            <td>${user.email}</td>
                                            <td>${user.website}</td>
                                        </tr>`
                                );
                            }
                        } else {
                            tBody.append(
                                `<tr>
                                        <td>${users.id}</td>
                                        <td>${users.name}</td>
                                        <td>${users.username}</td>
                                        <td>${users.email}</td>
                                        <td>${users.website}</td>
                                    </tr>`
                            );
                        }
                    })
            })
            .catch(err => {
                console.log(err);
            })


    })
})