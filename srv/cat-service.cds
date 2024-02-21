using my.ganttchart as my from '../db/data-model';

service CatalogService {
    entity Employee as projection on my.Employee;
    entity Project as projection on my.Project;
    entity Task as projection on my.Task;
}
