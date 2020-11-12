'use strict';

(function () {
  const HASHTAGS_MAX_COUNT = 5;
  const COMMENTS_MAX = 120;
  const HASHTAG_REG_EXP = /^#([а-яА-Я]|[a-zA-Z]|[0-9]){1,20}$/;

  const USER_MESSAGE = {
    LESS_THEN_FIVE: `Нельзя указать больше пяти хэш-тегов`,
    NO_DUPLICATES: `Один и тот же хэш-тег не может быть использован дважды`,
    CORRECT: `Не верный формат хештега`,
  };

  const hashTagsInput = document.querySelector(`.text__hashtags`);
  const commentsField = document.querySelector(`.text__description`);

  const hashTagsInputKeyupHandler = function () {
    const hashtagsArr = hashTagsInput.value.replace(/ +/g, ` `).trim().toLowerCase().split(` `);

    const isHashtagsLessThanFive = hashtagsArr.length <= HASHTAGS_MAX_COUNT;

    const isHashtagCorrect = hashtagsArr.every(function (tag) {
      return HASHTAG_REG_EXP.test(tag);
    });

    const isHastagsNoDuplicates = hashtagsArr.every(function (item, index, array) {
      return array.indexOf(item) === index;
    });

    hashTagsInput.setCustomValidity(``);

    if (!isHashtagsLessThanFive) {
      hashTagsInput.setCustomValidity(USER_MESSAGE.LESS_THEN_FIVE);
    }

    if (!isHashtagCorrect) {
      hashTagsInput.setCustomValidity(USER_MESSAGE.CORRECT);
    }

    if (!isHastagsNoDuplicates) {
      hashTagsInput.setCustomValidity(USER_MESSAGE.NO_DUPLICATES);
    }
    hashTagsInput.reportValidity();

    if (hashTagsInput.value === ``) {
      hashTagsInput.setCustomValidity(``);
    }

    if ((isHashtagCorrect && isHastagsNoDuplicates && isHashtagsLessThanFive) || hashTagsInput.value === ``) {
      hashTagsInput.style.outline = ``;
      hashTagsInput.style.background = ``;
    } else {
      hashTagsInput.style.outline = `2px solid red`;
      hashTagsInput.style.background = `pink`;
    }
  };

  hashTagsInput.addEventListener(`input`, hashTagsInputKeyupHandler);

  hashTagsInput.addEventListener(`focusin`, function () {
    document.removeEventListener(`keydown`, window.modalopenclose.onPhotoEditEscPress);
  });

  hashTagsInput.addEventListener(`focusout`, function () {
    document.addEventListener(`keydown`, window.modalopenclose.onPhotoEditEscPress);
  });

  commentsField.oninput = function () {
    const valueLength = commentsField.value.length;
    if (commentsField.value.length > COMMENTS_MAX) {
      commentsField.setCustomValidity(`Удалите ` + (COMMENTS_MAX - valueLength) + ` симв.`);
    } else {
      commentsField.setCustomValidity(``);
    }
    commentsField.reportValidity();
  };

  commentsField.addEventListener(`focusin`, function () {
    document.removeEventListener(`keydown`, window.modalopenclose.onPhotoEditEscPress);
  });

  commentsField.addEventListener(`focusout`, function () {
    document.addEventListener(`keydown`, window.modalopenclose.onPhotoEditEscPress);
  });
})();
