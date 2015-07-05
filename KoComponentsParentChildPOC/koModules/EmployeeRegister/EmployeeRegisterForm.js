define(['text!koModules/EmployeeRegister/EmployeeForm.html'], function (temp) {
    function EmployeeRegister(params) {
        alert('Emloyee');
        this.data = params;
        console.log(this.data);
        this.data.UserData.Emp.AddNewEmloyee = function (data) {
            alert("No permission");
            console.log(data);
        }
    }

    return {
        viewModel: EmployeeRegister,
        template: temp
    }
});