/* eslint-disable react/prop-types */
// Dependencies
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
// Data
import {
	getAllCourses,
	getCoursesByCategory,
	getCategoryTitle,
} from '../../data/data';
// Components
import Banner from '../../components/Courses/Banner/Banner';
import CoursesList from '../../components/Courses/CoursesList/CoursesList';

const CoursesListContainer = ({ match }) => {
	const [loader, setLoader] = useState(true);
	const [categoryTitle, setCategoryTitle] = useState('');
	const [coursesList, setCoursesList] = useState([]);

	useEffect(() => {
		console.log('fired', match.params.id);
		if (!match.params.id) {
			getAllCourses()
				.then((array) => {
					setCategoryTitle('All Courses');
					setCoursesList(array);
					setLoader(false);
				})
				.catch((err) => {
					setCategoryTitle('Sorry, no courses available :(');
					setCoursesList([]);
					setLoader(false);
				});
		} else {
			const title = getCategoryTitle(match.params.id);
			setCategoryTitle(title[0].title);
			getCoursesByCategory(match.params.id).then((coursesByCategory) => {
				setCoursesList(coursesByCategory);
				setLoader(false);
			});
		}
	}, [match.params.id]);

	return (
		<>
			{loader ? (
				<h1>Loading...</h1>
			) : (
				<>
					<Banner categoryHeader={categoryTitle} />
					<CoursesList courses={coursesList} />
				</>
			)}
		</>
	);
};

export default withRouter(CoursesListContainer);
