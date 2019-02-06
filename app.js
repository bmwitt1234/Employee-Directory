
$('#view').on('click', function(){
    $('#display').empty();
    console.log(employeeList)
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

$('#update').on('click', function(){
    console.log("update")
    $('#display').empty();
    $('#display').append(`
        <div class="inputForm">
        <label for="name">Update/Change Information by Name</label>
        <input id="name" placeholder="name"/>
        <input id="officeNum" placeholder="office number"/>
        <input id="phoneNum" placeholder="phone number"/>
        <button id="submit">submit</button>
        </div>
    `)

    $('#submit').on('click', function(){
    
            var name= $('#name').val()
            var officeNum=$('#officeNum').val()
            var phoneNum= $('#phoneNum').val()
    

        for (let i=0; i<employeeList.length; i++) {
            if(employeeList[i].name === name){
                employeeList[i].officeNum = officeNum
                employeeList[i].phoneNum = phoneNum

            }
        
        }
    
    

        
    })
})

$('#delete').on('click', function(){
    $('#display').empty();
    $('#display').append(`
        <div class="inputForm">
        <input id="name" placeholder="name"/>
       
        <button id="submit">submit</button>
        </div>
    `)

    $('#submit').on('click', function(){
        
         var name = $('#name').val()
          var index
            
        for (let i=0; i<employeeList.length; i++) {
            if(employeeList[i].name === name){
               index = i

            }
        
        }
        console.log(index)
        employeeList.splice(index,1)
        console.log(employeeList)

       
    

        
    })
})