import styles from './CoursesList.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitTodo } from '../../../redux/actions';
import CourseCard from '../CourseCard/CourseCard';

const CoursesList = ({ courses }) => {
  return (
    <div className={styles.courses__grid}>
      {courses.map((course) => {
        return (
          <Link key={course.id} to={`/course/${course.id}`}>
            <CourseCard
              img={course.img}
              title={course.title}
              description={course.description}
              price={course.price}
            />
          </Link>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return state;
};

export default connect(mapStateToProps, {
  submitTodo: submitTodo,
})(CoursesList);
