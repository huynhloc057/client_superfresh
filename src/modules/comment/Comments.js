import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ListReviews from "./ListReviews";

const Comments = () => {
  const { productDetail } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {userInfo ? (
        <button
          id="review_btn"
          type="button"
          className="mt-4 btn btn-primary"
          data-toggle="modal"
          data-target="#ratingModal"
          // onClick={setUserRatings}
        >
          Submit Your Review
        </button>
      ) : (
        <div className="mt-5 alert alert-danger" type="alert">
          Login to post your review.
        </div>
      )}

      <div className="mt-2 mb-5 row">
        <div className="rating w-50">
          <div
            className="modal fade"
            id="ratingModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="ratingModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="ratingModalLabel">
                    Submit Review
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <ul className="stars">
                    <li className="star">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="star">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="star">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="star">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="star">
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>

                  <textarea
                    name="review"
                    id="review"
                    className="mt-3 form-control"
                    // value={comment}
                    // onChange={(e) => setComment(e.target.value)}
                  ></textarea>

                  <button
                    className="float-right px-4 my-3 text-white btn review-btn"
                    // onClick={reviewHandler}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {productDetail.reviews && productDetail.reviews.length > 0 && (
        <ListReviews reviews={productDetail.reviews} />
      )}
    </Fragment>
  );
};

export default Comments;
