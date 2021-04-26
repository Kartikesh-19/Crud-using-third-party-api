
let i = '';
var e;
var f;
var g;
function fetch1() {

    fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
        console.log(data);
        return data.json();

    }).then((Actual_data) => {
        p = Actual_data;
        console.log(Actual_data);
        var a = '';

        $('#tbl').empty();
        for (i = 0; i < Actual_data.length; i++) {

            a += `<tr><td>${Actual_data[i].userId}</td>
                  <td>${Actual_data[i].id}</td>
                  <td>${Actual_data[i].title}</td>
                  <td>${Actual_data[i].body}</td>
                  <td><button class='btn btn-danger' onclick="Delete()">Delete</button></td>
                  <td><button class='btn btn-success' data-target="#form" data-toggle="modal">Edit</button></td>
            </tr>`

        }
        $('#tbl ').html(a);




    })
}

fetch1();

function Delete2() {
    console.log('chal rha hai');

    debugger;
    $('#tbl tbody').closest('tr').remove();



}
function edit() {
    let a = $('#num1').val();
    let c = $('#text1').val();
    let d = $('#text2').val();


    debugger;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",

        body: JSON.stringify({
            userId: a,
            title: c,
            body: d

        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    }).then((response) => {
        console.log(response);
        return response.json()


    }).then((json) => {
        console.log(json);
        e = json.userId
        console.log(e);

        f = json.title
        g = json.body
        a += `<tr><td>${json.userId}</td><td>${json.id}</td><td>${json.title}</td><td>${json.body}</td>
        <td><button class='btn btn-danger' onclick="Delete2()">Delete</button></td>
        <td><button class='btn btn-info' onclick="Update()">Upgrade</button></td></tr>`
        $("#tbl").append(a)
    })
    $('#num1').val('');
    $('#text1').val('');
    $('#text2').val('');





}

function Delete() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then((result) => {
        console.log(result);
        return result.json();

    }).then((data) => {
        console.log(data);

    })

}
function Update() {
    debugger;
    var p = $('#num1').val(e);
    var q = $('#text1').val(f);
    var r = $('#text2').val(g);
    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
        method: "PATCH",
        body: JSON.stringify({
            userId: p,
            title: q,
            body: r

        }),
        headers: {
            'content-type': 'application/json'
        }

    }).then((restore) => {
        return restore.json();
    }).then((data) => {
        console.log(data);

    })
   
}