import LoadingCircle from "./LoadingCircle"

type Props = {
  disabled: boolean,
  label?: string
}

export default function SubmitBtn({ disabled, label }: Props) {
  return (
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 rounded-md text-white p-2" disabled={disabled}>
      {
        disabled ? (
          <LoadingCircle />
        ) : (label ?? "submit")
      }
    </button>
  )
}
