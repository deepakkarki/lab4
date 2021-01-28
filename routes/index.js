
/*
 * GET home page.
 */

var projects = [
  {
    "name"  : "Project One",
    "image" : "lorempixel.city.1.jpeg",
    "id"    : "project1"
  },
  {
    "name"  : "Project Two",
    "image" : "lorempixel.city.2.jpeg",
    "id"    : "project2"
  },
  {
    "name"  : "Project Three",
    "image" : "lorempixel.abstract.1.jpeg",
    "id"    : "project3"
  },
  {
    "name"  : "Project Four",
    "image" : "lorempixel.people.1.jpeg",
    "id"    : "project4"
  },
  {
    "name"  : "Project Five",
    "image" : "lorempixel.people.2.jpeg",
    "id"    : "project5"
  },
]


exports.view = function(req, res){
  res.render('index', {projects});
};