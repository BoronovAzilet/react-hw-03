import React, { Component } from "react";
import axios from "axios";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import "./App.css";
export default class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    per_page: 21,
    isLoading: false,
    loading: false,
    showModal: false,
    src: null,
  };

  fatchImages = async () => {
    const { query, per_page } = this.state;
    try {
      await axios
        .get(
          `https://pixabay.com/api/?key=34695797-1fae3d9441fb187335514c8af&q=${query}&image_type=photo&per_page=${per_page}`
        )
        .then((response) => {
          const data = response.data.hits;
          this.setState({ images: data, loading: true });
          console.log(response);
        });
    } catch (error) {
      console.log(
        " Ошибка при запросе componentDidMount error App.js: " + error
      );
    }
  };

  componentDidMount() {
    this.fatchImages();
  }

  onSubmit = (query) => {
    this.setState({ query, isLoading: true, images: [] });
  };

  loadImages = async () => {
    const { page, per_page, query } = this.state;
    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?key=28598653-ac578a657988498e7082adc71&q=${query}&image_type=video&per_page=${per_page}&page=${page}`
      );
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
        isLoading: false,
        loading: true,
      }));
    } catch (error) {
      throw new Error(error);
    }
  };

  componentDidUpdate() {
    const { isLoading } = this.state;

    if (isLoading) {
      this.loadImages();
    }
  }

  hendelclik = () => {
    this.setState(({ page }) => ({ page: page + 1, isLoading: true }));
  };

  toggleModal = (src) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      src,
    }));
  };
  // запрос на фота с п жизненного цикла

  render() {
    const { loading, images, showModal, src } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {!loading ? (
          <Loader />
        ) : (
          <ImageGallery images={images} modalToggler={this.toggleModal} />
        )}
        {showModal && (
          <Modal closeModal={this.toggleModal}>
            <img
              src={src}
              alt=""
              style={{
                height: "90vh",
                width: "70vw",
                borderRadius: "5px",
              }}
            />
          </Modal>
        )}
        <Button onClick={this.hendelclik} />
      </>
    );
  }
}
