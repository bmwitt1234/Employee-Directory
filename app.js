
$('#view').on('click', function(){
    $('#display').empty();
    for(let i = 0; i < employeeList.length; i++) {
        $('#display')
        .append(
            `<div class="card">
             <div>${employeeList[i].name}</div>
             <div>${employeeList[i].officeNum}</div>
             <div>${employeeList[i].phoneNum}</div>
            </div>`
            )
    }
})

$('#add').on('click', function(){
    $('#display').empty();
    $('#display').append(`
        <div class="inputForm">
        <input id="name" placeholder="name"/>
        <input id="officeNum" placeholder="office number"/>
        <input id="phoneNum" placeholder="phone number"/>
        <button id="submit">submit</button>
        </div>
    `)

    $('#submit').on('click', function(){
        const newEmployee = {
            name: $('#name').val(),
            officeNum: $('#officeNum').val(),
            phoneNum: $('#phoneNum').val()
        }

        employeeList.push(newEmployee);
    
    })
})


