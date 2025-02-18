import express from 'express';
import { fetchAll ,create,update,deleteDepartment} from '../controller/DepartmentController.js';


const route = express.Router();

route.get('/getAllDeprtment', fetchAll);
route.post('/create', create);
route.put('/update/:id', update);
route.delete('/delete/:id', deleteDepartment);
export default route;