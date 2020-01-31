import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../store/categories/action';

// The "unconnected" inner component:
class CategoriesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories);
  }

  render() {
    const loading = !this.props.categories;
    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <nav>
            {this.props.categories.map((cat) => (
              <span key={cat.id}>
                <Link to={`/categories/${cat.id}/products`}>
                  {cat.name}
                </Link>
                &nbsp;&nbsp;
              </span>
            ))}
          </nav>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    categories: reduxState.categories,
  };
}
export default connect(mapStateToProps)(CategoriesList);
