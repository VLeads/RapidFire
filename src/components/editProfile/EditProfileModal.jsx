import { CameraIcon } from "assets/icons/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { editUser } from "redux/slices/authSlice";
import { createSelectorCreator } from "reselect";
import styles from "./editProfileModal.module.css";

export const EditProfileModal = ({ isEditModalOpen, setIsEditModalOpen }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [userForm, setUserForm] = useState({});

  useEffect(() => {
    setUserForm(user);
  }, [user]);

  const updateImageHandler = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const uploadedImage = reader.result;
        setUserForm({ ...userForm, userPhoto: uploadedImage });
      });
      reader.readAsDataURL(selectedFile);
    }
  };

  const updateCoverImageHandler = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const uploadedImage = reader.result;
        setUserForm({ ...userForm, coverPhoto: uploadedImage });
      });
      reader.readAsDataURL(selectedFile);
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(editUser(userForm));
    setIsEditModalOpen(false);
  };

  return (
    <div
      id="myModal"
      className="modal"
      style={isEditModalOpen ? { display: "block" } : { display: "none" }}
    >
      <div className={`modal-content box-shadow ${styles.customModal}`}>
        <div className="modal-body">
          <form
            className={`card-vertical signup-form ${styles.customModal}`}
            onSubmit={(e) => submitFormHandler(e)}
          >
            <div
              className="close-icon"
              onClick={() => setIsEditModalOpen(false)}
            >
              &times;
            </div>

            <div className={styles.imgContainer}>
              <img className={styles.cover} src={userForm.coverPhoto} />
              <span className={styles.coverCameraIcon}>
                <CameraIcon />
              </span>
              <input
                className={styles.editCoverImgInput}
                type="file"
                accept="image/gif, image/jpeg, image/png, image/jpg"
                onChange={(e) => updateCoverImageHandler(e)}
              />
              <div className={styles.avatarPic}>
                <div>
                  <img src={userForm.userPhoto} />
                  <span className={styles.avatarCameraIcon}>
                    <CameraIcon />
                  </span>
                  <input
                    className={styles.editImgInput}
                    type="file"
                    accept="image/gif, image/jpeg, image/png, image/jpg"
                    onChange={(e) => updateImageHandler(e)}
                  />
                </div>
              </div>
            </div>

            <div className={`input-group-parent ${styles.inputGroupCustom}`}>
              <div className="input-group">
                <label>First Name</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="Vishal"
                  maxLength="40"
                  name="name"
                  value={userForm.firstName}
                  onChange={(e) =>
                    setUserForm({ ...userForm, firstName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="Kumar"
                  maxLength="40"
                  name="name"
                  value={userForm.lastName}
                  onChange={(e) =>
                    setUserForm({ ...userForm, lastName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="input-group">
                <label>Portfolio URL</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="www.example.com"
                  maxLength="40"
                  name="url"
                  value={userForm.link}
                  onChange={(e) =>
                    setUserForm({ ...userForm, link: e.target.value })
                  }
                  required
                />
              </div>
              <div className="input-group">
                <label>Bio</label>
                <textarea
                  className="input-box"
                  type="text"
                  placeholder="write something about you"
                  maxLength="90"
                  name="bio"
                  value={userForm.bio}
                  onChange={(e) =>
                    setUserForm({ ...userForm, bio: e.target.value })
                  }
                  rows="2"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className={`btn btn-primary ${styles.customBtn}`}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
