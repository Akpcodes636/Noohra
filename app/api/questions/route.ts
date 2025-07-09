// pages/api/getquestions.js
import { NextResponse } from "next/server";

interface Option {
  text: string;
  category: string;
  points: number;
}

interface Question {
  id: number;
  question: string;
  options: {
    a: Option;
    b: Option;
    c: Option;
    d?: Option;
  };
}

interface Questions {
  A: Question[];
  B: Question[];
}

const questions: Questions = {
  "A": [
    {
      "id": 1,
      "question": `When given a task they enjoy (e.g., playing a video game, building with LEGOs), 
      how long can they typically focus without significant distraction or needing a reminder?`,
      "options": {
        "a": {
          "text": `Struggles to maintain focus even on enjoyable tasks for age-appropriate periods; 
          easily distracted; frequently shifts activities.`,
          "category": "X",
          "points": 3
        },
        "b": {
          "text": `Can hyperfocus intensely on preferred activities for extended periods, 
          to the exclusion of everything else; difficulty shifting attention away.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Varies greatly depending on the task; difficulty starting tasks even if interested; 
          generally inconsistent.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 2,
      "question": `How do they react when asked to shift their attention from one activity to another, 
      especially from a preferred activity?`,
      "options": {
        "a": {
          "text": `Struggles to disengage due to impulsivity or executive function difficulty; 
          might forget new instruction; easily sidetracked.`,
          "category": "X",
          "points": 3
        },
        "b": {
          "text": `Exhibits significant distress, rigidity, or resistance to transitions; 
          becomes upset or withdrawn if routines are disrupted.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Mild protest but eventually complies; sometimes difficult, sometimes easy.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 3,
      "question": `Observe their general movement and motor activity in various settings 
      (e.g., classroom, home, playground).`,
      "options": {
        "a": {
          "text": `Constantly fidgeting, squirming, restless; runs or climbs excessively; 
          difficulty staying seated; talks excessively; interrupts frequently.`,
          "category": "X",
          "points": 3
        },
        "b": {
          "text": `Has specific repetitive movements (stimming) like hand flapping, rocking, 
          spinning, often for self-regulation; prefers solitary play or struggles with coordinated group games.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Sometimes restless, sometimes still; specific movements only in certain situations.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 4,
      "question": `How do they typically respond to instructions or waiting their turn in games/conversations?`,
      "options": {
        "a": {
          "text": `Acts without thinking; blurts out answers; struggles to wait turn; often cuts off others.`,
          "category": "X",
          "points": 3
        },
        "b": {
          "text": `May not understand the social rules of turn-taking; 
          might talk extensively about a preferred topic without noticing others' disinterest; 
          struggles with reciprocal conversation.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Occasionally impulsive; sometimes quiet and withdrawn.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 5,
      "question": `Describe their approach to social interactions with peers.`,
      "options": {
        "a": {
          "text": `Wants to interact but struggles with social cues, interrupts, 
          dominates conversations, or is overly energetic; experiences conflict due to impulsivity`,
          "category": "X",
          "points": 2
        },
        "b": {
          "text": `May appear indifferent to peers or prefer solitary play; struggles to initiate or maintain reciprocal conversations; 
          difficulty understanding non-verbal cues.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Some difficulty, but generally seeks out interaction; sometimes withdrawn.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 6,
      "question": `How do they use language and communicate their needs/thoughts?`,
      "options": {
        "a": {
          "text": `Rapid speech, jumps between topics, difficulty organizing thoughts; 
          might blurt out inappropriate comments.`,
          "category": "X",
          "points": 2
        },
        "b": {
          "text": `May have delayed speech, unusual tone/prosody; repetitive use of phrases (echolalia); 
          difficulty with abstract language, sarcasm, or humor; talks extensively about specific interests.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Clear communication but sometimes disorganized; occasional repetitive phrases.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 7,
      "question": `How do they react to changes in routines or unexpected events?`,
      "options": {
        "a": {
          "text": `Easily distracted by changes, forgets new instructions, or struggles to adapt due to executive function. 
          Less likely to show extreme distress unless it impacts an immediate desire.`,
          "category": "X",
          "points": 2
        },
        "b": {
          "text": `Experiences significant distress, meltdowns, or rigidity when routines are disrupted; 
          strong need for predictability and sameness.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Minor frustration, but generally adapts; sometimes very upset.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 8,
      "question": `Describe their interests and play patterns`,
      "options": {
        "a": {
          "text": `Interests are varied but often short-lived; may quickly move from one toy/activity to another; 
          play can be disorganized or impulsive.`,
          "category": "X",
          "points": 2
        },
        "b": {
          "text": `Intense, narrow, and sometimes unusual interests; may collect specific items or engage in repetitive play 
          (e.g., lining up toys); play is often systematic or ritualistic.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Wide range of interests, some intense; sometimes repetitive play`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 9,
      "question": `How do they respond to sensory input (sounds, textures, lights, tastes)?`,
      "options": {
        "a": {
          "text": `May be easily distracted by sensory input, but generally doesn't show extreme distress or seeking. 
          Fidgeting might be a distraction.`,
          "category": "X",
          "points": 1
        },
        "b": {
          "text": `Can be highly sensitive (hypersensitive) or under-responsive (hyposensitive) to sensory input; 
          may avoid or seek specific sensory input. Can lead to distress.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Sometimes sensitive, sometimes seeks input; generally adaptable.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 10,
      "question": `How do they typically manage strong emotions (frustration, anger, excitement)?`,
      "options": {
        "a": {
          "text": `Impulsive emotional outbursts; difficulty self-regulating emotions, 
          leading to quick shifts in mood; struggles to 'think before they act' emotionally.`,
          "category": "X",
          "points": 3
        },
        "b": {
          "text": `Difficulty identifying and expressing emotions appropriately (alexithymia); 
          emotional outbursts (meltdowns) often triggered by sensory overload, changes, or communication breakdown.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Varies; sometimes calm, sometimes dysregulated.`,
          "category": "Z",
          "points": 1
        }
      }
    }
  ],

  "B": [
    {
      "id": 1,
      "question": `When working on a project or task (e.g., school assignment, work project, planning an event), 
      how do you typically approach initiating, organizing, and completing it?`,
      "options": {
        "a": {
          "text": `Often struggle with: initiating tasks (even desired ones), breaking them down into steps, prioritizing, managing time effectively, 
          and seeing projects through to completion. My workspace might be disorganized.`,
          "category": "X",
          "points": 3
        },
        "b": {
          "text": `Can plan meticulously for tasks of intense interest, often becoming overly focused on details or a specific method, 
          making it hard to adapt if changes are needed. May struggle to initiate tasks not aligned with special interests.`,
          "category": "Y",
          "points": 2
        },
        "c": {
          "text": `Generally manage, but sometimes feel overwhelmed by large tasks or procrastinate a bit before starting. 
          My organization varies.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 2,
      "question": `How easily do you switch between different tasks or adapt when your routine or plans change unexpectedly?`,
      "options": {
        "a": {
          "text": `Find it difficult to shift mental gears quickly; I'm easily distracted when transitioning or might forget what I was supposed to do next. 
          Minor unexpected changes don't usually cause significant emotional distress, just disorganization.`,
          "category": "X",
          "points": 3
        },
        "b": {
          "text": `Significant anxiety, distress, or resistance to unexpected changes in routine or plans. 
          I strongly prefer predictability and sameness, and disruptions can be very upsetting or overwhelming.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Adapt with some effort; sometimes it's smooth, other times it's challenging depending on the change.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 3,
      "question": `How effectively do you keep track of appointments, deadlines, and your personal belongings?`,
      "options": {
        "a": {
          "text": `Frequently forget appointments, miss deadlines, or misplace important items, even if I try to remember. 
          I often rely on others or many external reminders to keep me on track.`,
          "category": "X",
          "points": 3
        },
        "b": {
          "text": `May be highly organized in very specific areas related to my interests or routines, 
          but struggle with broader, flexible organization or remembering things not strictly tied to a routine.`,
          "category": "Y",
          "points": 2
        },
        "c": {
          "text": `Generally manage, though I occasionally forget something or misplace items.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 4,
      "question": `Describe your typical approach to social interactions and conversations 
      (e.g., with friends, family, colleagues, new acquaintances).`,
      "options": {
        "a": {
          "text": `May talk excessively, interrupt others, or blurt out thoughts without thinking. 
          I might struggle with active listening and have many acquaintances but fewer deep, 
          lasting friendships due to impulsivity or inconsistency.`,
          "category": "X",
          "points": 3
        },
        "b": {
          "text": `Struggle with reciprocal conversation, often talking extensively about my special interests without a lot of give-and-take,
          or finding it hard to initiate conversations. 
          I may appear socially awkward, aloof, or struggle to understand subtle social cues.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Have some social challenges, but generally feel able to connect with others; sometimes I'm withdrawn.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 5,
      "question": `How well do you interpret and respond to subtle non-verbal cues 
      (like facial expressions, body language, or tone of voice)?`,
      "options": {
        "a": {
          "text": `Often miss subtle cues due to inattention, distraction, or being focused on my own thoughts, which can lead to misunderstandings. 
          I might also struggle with regulating my own non-verbal cues (e.g., fidgeting, restless body language).`,
          "category": "X",
          "points": 2
        },
        "b": {
          "text": `Significant difficulty understanding or using non-verbal cues; 
          I may misinterpret intentions or emotions. My own facial expressions or eye contact might seem unusual to others.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Sometimes understand them well, other times I misinterpret; I'm generally aware of them.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 6,
      "question": `How do you initiate and maintain friendships or romantic relationships?`,
      "options": {
        "a": {
          "text": `May enthusiastically initiate connections but then struggle with consistency, follow-through, or maintaining interest. 
          I might find conflict resolution challenging due to impulsivity or emotional regulation.`,
          "category": "X",
          "points": 2
        },
        "b": {
          "text": `May find it very challenging to initiate or prefer solitary activities. 
          I struggle to build deep connections due to difficulties with social reciprocity, sharing emotions, or understanding others' perspectives.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Can initiate and maintain, but I sometimes find it challenging to build very deep connections.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 7,
      "question": `Describe your hobbies and leisure activities.`,
      "options": {
        "a": {
          "text": `Have a wide range of interests, but I often 'flit' between them, 
          struggling to sustain deep interest in one activity for very long. 
          I might start many new projects or hobbies but rarely finish them.`,
          "category": "X",
          "points": 3
        },
        "b": {
          "text": `Have intense, narrow, and often highly specific interests; I can spend a significant amount of time and energy on these topics, 
          becoming an 'expert,' and find it difficult to engage in activities outside of them.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `Have varied interests, some of which are very intense; I can switch between them but also stick with some for a while.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 8,
      "question": `How important are routines and predictability in your daily life?`,
      "options": {
        "a": {
          "text": `May struggle to follow routines due to forgetfulness, impulsivity, or being easily distracted, which can lead to disorganization. 
          I'm usually not highly distressed by minor deviations from routine.`,
          "category": "X",
          "points": 2
        },
        "b": {
          "text": `Have a strong preference for routines and sameness; I can become highly distressed, anxious, 
          or even experience meltdowns/shutdowns when routines are disrupted. I find comfort and security in predictability.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `I prefer routines but can usually adapt if things change; sometimes I'm more rigid, sometimes more flexible.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 9,
      "question": `How do you typically manage strong emotions (e.g., anger, anxiety, frustration, sadness, excitement)?`,
      "options": {
        "a": {
          "text": `Experience intense but often short-lived emotional outbursts; I struggle with tolerating frustration and have rapid mood swings. 
          I might also experience 'rejection sensitive dysphoria' (intense emotional pain from perceived criticism or rejection).`,
          "category": "X",
          "points": 3
        },
        "b": {
          "text": `Struggle to identify and express my own emotions appropriately (alexithymia); 
          emotional outbursts (meltdowns or shutdowns) are often triggered by sensory overload, unexpected changes, or communication breakdowns.`,
          "category": "Y",
          "points": 3
        },
        "c": {
          "text": `It varies; sometimes I'm calm, other times I'm highly reactive; I can be internalizing or externalizing.`,
          "category": "Z",
          "points": 1
        }
      }
    },
    {
      "id": 10,
      "question": `How do you perceive your own difficulties and challenges in daily life?`,
      "options": {
        "a": {
          "text": `Often express frustration with my own inattention, disorganization, or impulsivity. 
          I might feel 'lazy' or 'stupid' despite knowing I'm capable, leading to anxiety or 
          depression related to underachievement or unmet potential.`,
          "category": "X",
          "points": 3
        },
        "b": {
          "text": `May be aware of social differences but struggle to understand why interactions are difficult for me. 
          I can experience anxiety or depression related to social challenges, sensory sensitivities, or feeling misunderstood by others.`,
          "category": "Y",
          "points": 2
        },
        "c": {
          "text": `I have a mix of self-awareness and confusion about my challenges; sometimes I'm very self-critical.`,
          "category": "Z",
          "points": 1
        }
      }
    }
  ]
};

export async function GET() {
  return NextResponse.json(questions);
}