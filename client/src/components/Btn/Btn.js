import React from "react";
import "./Btn.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Btn = props => {
  switch (props.type){
    default:
    return(<button >
      Button
      </button>);
    break;
    case "delete":
    return(<button >
    ✗
    </button>);
    break;
    case "save":
    return(<button >
    Save
    </button>);
    break;
    case "add-note":
    return(<button >
    Add Note
    </button>);
    break;
    case "delete-note":
    return(<button >
    Delete Note
    </button>);
    break;

  }
};

export default Btn;
