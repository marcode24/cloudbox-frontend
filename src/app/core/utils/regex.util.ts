export class RegexClass {
  public static readonly ONLY_TEXT = /^[a-zA-ZñÀ-ú\s]{2,20}$/;
  public static readonly EMAIL = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  public static readonly PASSWORD = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,30}$/;
  public static readonly USER_NAME = /^[a-zA-Z0-9]{8,24}$/;
}
