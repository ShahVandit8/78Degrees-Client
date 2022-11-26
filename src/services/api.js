import axios from 'axios';

const URL = "https://cafemanagementsys.herokuapp.com/api";

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/register` ,data)
    }
    catch (err) {
        console.log("Error occured while calling api", err);
    }
}

export const loginUser = async (data) => {
    try {
        return await axios.post(`${URL}/login` ,data)

    }
    catch (err) {
        console.log("Error occured while calling api", err);
    }
}

export const getUser = async () => {
    try {
        return await axios.get(`${URL}/emplist`);
    } catch (err) {
        console.log("Error occured while calling getUser api", err);
    }
}

export const getEditEmp = async (id) => {
    try {
        return await axios.get(`${URL}/emp/${id}`);
    } catch (err) {
        console.log("Error occured while calling getEditEmp api", err);
    }
}

export const editUser = async (user, id) => {
    try {
        return await axios.post(`${URL}/emp/${id}`, user);
    } catch (err) {
        console.log("Error occured while calling editUser api", err);
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/emp/${id}`);
    } catch (err) {
        console.log("Error occured while calling deleteUser api", err);
    }
}

export const getStaffCount = async () => {
    try {
        return await axios.get(`${URL}/staffcount`);
    } catch (err) {
        console.log("Error occured while calling getStaffCount api", err);
    }
}

// Food Category API

export const getCategory = async () => {
    try {
        return await axios.get(`${URL}/categorylist`);
    } catch (err) {
        console.log("Error occured while calling getCategory api", err);
    } 
}

export const addCategory = async (data) => {
    try {
        return await axios.post(`${URL}/addcategory` ,data)
    }
    catch (err) {
        console.log("Error occured while calling addCategory api", err);
    }
}

export const getEditCategory = async (id) => {
    try {
        return await axios.get(`${URL}/foodcategory/${id}`);
    } catch (err) {
        console.log("Error occured while calling getEditCategory api", err);
    }
}

export const editCategory = async (category, id) => {
    try {
        return await axios.post(`${URL}/foodcategory/${id}`, category);
    } catch (err) {
        console.log("Error occured while calling editCategory api", err);
    }
}

export const deleteCategory = async (id) => {
    try {
        return await axios.delete(`${URL}/foodcategory/${id}`);
    } catch (err) {
        console.log("Error occured while calling deleteCategory api", err);
    }
}

export const getTotalNoCategory = async () => {
    try {
        return await axios.get(`${URL}/totalcategoryno`);
    } catch (err) {
        console.log("Error occured while calling getTotalNoCategory api", err);
    } 
}

export const getCategoryList = async () => {
    try {
        return await axios.get(`${URL}/categorynamelist`);
    } catch (err) {
        console.log("Error occured while calling getCategoryList api", err);
    } 
}

// Food Item Menu

export const getFoodItems = async () => {
    try {
        return await axios.get(`${URL}/fooditemlist`);
    } catch (err) {
        console.log("Error occured while calling getFoodItems api", err);
    } 
}

export const addFoodItem = async (data) => {
    try {
        return await axios.post(`${URL}/addfooditem` ,data)
    }
    catch (err) {
        console.log("Error occured while calling addFoodItem api", err);
    }
}

export const deleteItem = async (id) => {
    try {
        return await axios.delete(`${URL}/fooditem/${id}`);
    } catch (err) {
        console.log("Error occured while calling deleteItem api", err);
    }
}

export const getEditFoodItem = async (id) => {
    try {
        return await axios.get(`${URL}/fooditem/${id}`);
    } catch (err) {
        console.log("Error occured while calling getEditFoodItem api", err);
    }
}

export const editFoodItem = async (fooditem, id) => {
    try {
        return await axios.post(`${URL}/fooditem/${id}`, fooditem);
    } catch (err) {
        console.log("Error occured while calling editFoodItem api", err);
    }
}

export const addtable = async (data) => {
    try {
        return await axios.post(`${URL}/configuretable` ,data)
    }
    catch (err) {
        console.log("Error occured while calling addtable api", err);
    }
}

export const getFoodItemCount = async () => {
    try {
        return await axios.get(`${URL}/totalfooditemno`);
    } catch (err) {
        console.log("Error occured while calling getFoodItemCount api", err);
    } 
}

// Table Management" 

export const getTableDetails = async () => {
    try {
        return await axios.get(`${URL}/tabledetailslist`);
    } catch (err) {
        console.log("Error occured while calling getTableDetails api", err);
    } 
}

export const getEditTable = async (id) => {
    try {
        return await axios.get(`${URL}/tabledetails/${id}`);
    } catch (err) {
        console.log("Error occured while calling getEditTable api", err);
    }
}

export const editTable = async (table, id) => {
    try {
        return await axios.post(`${URL}/tabledetails/${id}`, table);
    } catch (err) {
        console.log("Error occured while calling editTable api", err);
    }
}

export const deleteTable = async (id) => {
    try {
        return await axios.delete(`${URL}/tabledetails/${id}`);
    } catch (err) {
        console.log("Error occured while calling deleteTable api", err);
    }
}

export const getTableCount = async () => {
    try {
        return await axios.get(`${URL}/tablecount`);
    } catch (err) {
        console.log("Error occured while calling getTableCount api", err);
    } 
}


export const placeFoodOrder = async (data, id) => {
    try {
        return await axios.post(`${URL}/placeorder/${id}` ,data)
    }
    catch (err) {
        console.log("Error occured while calling placeOrder api", err);
    }
}


export const getOrderTicket = async () => {
    try {
        return await axios.get(`${URL}/neworder`)
    }
    catch (err) {
        console.log("Error occured while calling getOrderTicket api", err);
    }
}

export const getTotalOrder = async () => {
    try {
        return await axios.get(`${URL}/totalorder`)
    }
    catch (err) {
        console.log("Error occured while calling getTotalOrder api", err);
    }
}

export const getOrder = async (id) => {
    try {
        return await axios.get(`${URL}/order/${id}`)
    }
    catch (err) {
        console.log("Error occured while calling getOrder api", err);
    }
}

export const UpdateServed = async (id) => {
    try {
        return await axios.post(`${URL}/updatestatusorder/${id}`)
    }
    catch (err) {
        console.log("Error occured while calling UpdateServed api", err);
    }
}

export const getOrderServed = async () => {
    try {
        return await axios.get(`${URL}/servedorders`)
    }
    catch (err) {
        console.log("Error occured while calling getOrderServed api", err);
    }
}


export const getRevenue = async () => {
    try {
        return await axios.get(`${URL}/totalrevenue`)
    }
    catch (err) {
        console.log("Error occured while calling getRevenue api", err);
    }
}

export const TableValidate = async (id) => {
    try {
        return await axios.get(`${URL}/tablevalidate/${id}`)
    }
    catch (err) {
        console.log("Error occured while calling TableValidate api", err);
    }
}

export const getRecentOrders = async () => {
    try {
        return await axios.get(`${URL}/recentorders`)
    }
    catch (err) {
        console.log("Error occured while calling getRecentOrders api", err);
    }
}

export const getRecentOrdersServed = async () => {
    try {
        return await axios.get(`${URL}/recentservedorders`)
    }
    catch (err) {
        console.log("Error occured while calling getRecentOrdersServed api", err);
    }
}

export const InvoiceGen = async () => {
    try {
        return await axios.get(`${URL}/geninvoice`)
    }
    catch (err) {
        console.log("Error occured while calling InvoiceGen api", err);
    }
}

export const getQtyAlerts = async () => {
    try {
        return await axios.get(`${URL}/qtyalerts`)
    }
    catch (err) {
        console.log("Error occured while calling getQtyAlerts api", err);
    }
}

export const pwdforgot = async (id) => {
    try {
        return await axios.get(`${URL}/pwdforgot/${id}`)
    }
    catch (err) {
        console.log("Error occured while calling getQtyAlerts api", err);
    }
}


