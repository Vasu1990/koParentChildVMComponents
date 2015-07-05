define(['text!koModules/ManagerRegister/ManagerForm.html'], function (temp) {
    function ManagerRegister(params) {
        alert('Manager');
        this.data = params;
        console.log(this.data);

        this.data.UserData.Emp.AddNewEmloyee = function () {
            alert("Permission Granted");
        }

        this.data.UserData.Emp.ViewReports = function () {
            alert("Reports are here!");
        }
    }

    return {
        viewModel: ManagerRegister,
        template: temp
    }
});