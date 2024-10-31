export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IE-en-20241014-TRIFECTA-perspective_f7c30d00-1997-4b51-9702-100f7ede5ff4_small.jpg"
export const API_OPTIONS = {   
   method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzQ1YmU0MTFkNmZiN2QyNmUzMTZhNmE2MThjOGY5ZSIsIm5iZiI6MTcyOTk3MDY1OC45MzQ4MDMsInN1YiI6IjY3MWQzYjMzNGJlMTU0NjllNzBkZWE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5HmlT9Fch_AK9AofvJT-4fMZGfC2-ZRMyArctXFMFTo'
  }
}
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200/";
export const SUPPORTED_LANGUAGES = 
[
  {identifier:'en',name:'English'},
  {identifier:'hindi',name:'Hindi'},
  {identifier:'spanish',name:'Spanish'},

]
export const OPENAI_KEY = "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";

const mockData = {
  "id": "chatcmpl-AOAm0ImQV2kbDMNMC9PJRbvMYrhm9",
  "object": "chat.completion",
  "created": 1730324648,
  "model": "gpt-3.5-turbo-0125",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Bahubali: The Beginning, Arjun Reddy, Ala Vaikunthapurramuloo, Jersey, Eega",
        "refusal": null
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 64,
    "completion_tokens": 26,
    "total_tokens": 90,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "completion_tokens_details": {
      "reasoning_tokens": 0
    }
  },
  "system_fingerprint": null
}

const mockChoices={
  "id": "chatcmpl-AOB0JEG8MmfiPNY3P2Bpg8PbWAxMP",
  "object": "chat.completion",
  "created": 1730325535,
  "model": "gpt-3.5-turbo-0125",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Dangal, Andhadhun, Masaan, Raazi, Article 15",
        "refusal": null
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 64,
    "completion_tokens": 19,
    "total_tokens": 83,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "completion_tokens_details": {
      "reasoning_tokens": 0
    }
  },
  "system_fingerprint": null
}

export const R_MOVIES = {
  "id": "chatcmpl-AOOTWtC4tcILW5F6F6LOzAMDOnfe2",
  "object": "chat.completion",
  "created": 1730377318,
  "model": "gpt-3.5-turbo-0125",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Arjun Reddy, Pelli Choopulu, Fidaa, RX 100, Majili",
        "refusal": null
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 67,
    "completion_tokens": 21,
    "total_tokens": 88,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "completion_tokens_details": {
      "reasoning_tokens": 0
    }
  },
  "system_fingerprint": null
}
