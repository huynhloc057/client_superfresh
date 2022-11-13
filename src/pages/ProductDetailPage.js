import React, { useEffect, useState } from "react";
import Footer from "../modules/footer/Footer";
import ProductDetailTopBar from "../modules/categorytop/ProductDetailTopBar";
import ProductDetailContent from "../components/productdetail/ProductDetailContent";
import ProductDetailShortDescription from "../components/productdetail/ProductDetailShortDescription";
import Header from "../modules/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  addReviewProduct,
  getProductDetail,
  resetSuccessReview,
} from "../app/features/productSlice";
import { Rating } from "@material-ui/lab";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import ReviewCard from "../components/productReview/ReviewCard";
import { toast } from "react-toastify";
import CheckConnection from "../components/HOC/CheckConnection";

export default function ProductDetailPage() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { productDetail, isSuccess } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProductDetail(slug));
    if (isSuccess) {
      toast.success("Add Product Review Successfully !");
      dispatch(resetSuccessReview());
    }
    window.scrollTo(0, 0);
  }, [slug, dispatch, isSuccess]);
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const reviewSubmitHandler = () => {
    dispatch(
      addReviewProduct({ rating, comment, productId: productDetail._id })
    );
    setOpen(false);
  };

  if (Object.keys(productDetail).length === 0) {
    return null;
  }

  return (
    <CheckConnection>
      <div>
        <Header></Header>
        <ProductDetailTopBar></ProductDetailTopBar>
        <ProductDetailContent></ProductDetailContent>
        <ProductDetailShortDescription></ProductDetailShortDescription>
        <button onClick={submitReviewToggle} className="submitReview">
          Submit Review
        </button>

        <Dialog
          aria-labelledby="simple-dialog-title"
          open={open}
          onClose={submitReviewToggle}
        >
          <DialogTitle>Submit Review</DialogTitle>
          <DialogContent className="submitDialog">
            <Rating
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              size="large"
            />

            <textarea
              className="submitDialogTextArea"
              cols="30"
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </DialogContent>
          <DialogActions>
            <Button onClick={submitReviewToggle} color="secondary">
              Cancel
            </Button>
            <Button onClick={reviewSubmitHandler} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <div className="p-4 mx-10">
          {productDetail?.reviews && productDetail?.reviews[0] ? (
            <div className="reviews">
              {productDetail?.reviews &&
                productDetail?.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </div>
        <Footer></Footer>
      </div>
    </CheckConnection>
  );
}
