
export default function Validation(data) {

    let error = {}
    if (data.uname === "" && data.email === "" && data.mobile === "" && data.address === "" && data.password === "") {
        error.uname = "please fill the name field"
        error.email = "please fill the email field"
        error.mobile = "please fill the mobile field"
        error.address = "please fill the address field"
        error.password = "please fill the password field"
        error.conp = "password and confirm password doesn't match"
    }

    // email validation

    if (!data.email) {
        error.email = "please fill the email field";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        error.email = "email must be like this 'abc@xyz.com'";
    }

    // password validation 

    if (!data.password) {
        error.password = "please fill the password field"
    }
    else if (data.password.length <= 8 || !/[A-Z]/.test(data.password) || !/[a-z]/.test(data.password) || !/\d/.test(data.password)) {
        error.password = "password must contain 1 uppercase,1 lowercase letter and one number"
    }

    // mobile validation

    if (!/^\d{10}$/.test(data.mobile)) {
        error.mobile = "Mobile number must be 10 digits";
    }

    // name validation 

    if (data.uname.length <= 3) {
        error.uname = "your name must be upto 3 character"
    }

    // conp validation
    if (data.password !== data.conp) {
        error.conp = "confirm password doesn't match to your password"
    }

    return error
}

